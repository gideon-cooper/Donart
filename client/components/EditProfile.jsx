import React, { useEffect, useState, useContext } from 'react'

import { editProfile } from '../api'
import { UserContext, updateUserContext } from './UserContext'
import Footer from './Footer'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function EditProfile(props) {
  const [user, setUser] = useContext(UserContext)
  // console.log(props)
  const [form, setForm] = useState({
    name: user.name,
    about: user.about,
  })
  const [image, setImage] = useState(user.image)
  const [isCharity, setCharityBoolean] = useState(user.isCharity)
  const [isArtist, setArtistBoolean] = useState(user.isArtist)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setForm(user ? { name: user.name, about: user.about } : null)
    setImage(user ? user.image : null)
    setCharityBoolean(user ? user.isCharity : 0)
    setArtistBoolean(user ? user.isArtist : 0)
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleClick = () => {
    const updatedInfo = {
      name: form.name,
      about: form.about,
      image,
      isCharity,
      isArtist,
    }
    // console.log("is charity in handleclick: ", isCharity, "is artist in handleclick: ", isArtist)
    editProfile(props.match.params.id, updatedInfo)
    updateUserContext(setUser, { ...user, ...updatedInfo })
    return props.history.push('/profile')
  }

  // console.log('image: ', image)

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'donart')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/marikajf/image/upload', // why /image/upload?
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()
    // console.log(file)

    setImage(file.secure_url)
    // console.log("secure URL: ", image)
    setLoading(false)
  }

  return (
    <>
      <div className="editProfile">
        <div className="columns">
          <div className="column">
            <div className="card-flex-item card " style={{ margin: '20px' }}>
              <h1>Update Profile</h1>
              <h5>Profile Picture</h5>
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                <img src={image} alt="" style={{ width: '200px' }} />
              )}
              <div class="field">
                <div class="file is-info is-small">
                  <label class="file-label">
                    <input
                      name="file"
                      className="file-input"
                      // value={image}
                      onChange={uploadImage}
                      type="file"
                      placeholder="Choose profile picture"
                    />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">Change profile image…</span>
                    </span>
                  </label>
                </div>
              </div>

              <h5>Name</h5>
              <input
                className="input"
                name="name"
                value={form.name ? capitalizeFirstLetter(form.name) : null}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
              />

              <h5>Your Bio</h5>
              <textarea
                rows="3"
                className="textarea"
                name="about"
                value={form.about}
                onChange={handleChange}
                type="text"
                placeholder="About"
              />

              <h5>Is this profile for a charity organisation?</h5>
              {/* <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"/>
<label for="subscribeNews">Check this box if you are listing as a charity</label> */}
              <div className="select">
                <select
                  name="isCharity"
                  onChange={(event) => setCharityBoolean(event.target.value)}
                >
                  <option value={isCharity}>Choose option...</option>
                  <option key="is-charity" name="charity" value={1}>
                    Yes, I&apos;m a charity
                  </option>
                  <option key="is-not-charity" name="not-charity" value={0}>
                    Not a charity
                  </option>
                </select>
              </div>

              <h5>Will you be donating art on our site as an artist?</h5>
              <div className="select">
                <select
                  className="select"
                  name="isArtist"
                  onChange={(event) => setArtistBoolean(event.target.value)}
                >
                  <option value={isArtist}>Choose option...</option>
                  <option key="is-artist" name="artist" value={1}>
                    Yes, I&apos;m an artist
                  </option>
                  <option key="is-not-artist" name="not-artist" value={0}>
                    Not an artist
                  </option>
                </select>
              </div>

              <div className="updateProfileButton">
                <button className="button is-warning" onClick={handleClick}>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
