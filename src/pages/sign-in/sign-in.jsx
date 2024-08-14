// import './sign-in.css'

export default function SignInPage() {

  return (
    <>
      <section 
        className="sign-in-page h-100 gradient-form" 
        style={{ 
          backgroundImage: "url('https://www.whitesky.co.id/images/service_1_large.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh' // Ensures it covers at least the viewport height
        }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1">Sign In</h4>
                      </div>
                      <form>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example11">Name</label>
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Full Name .."
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example11">Email</label>
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Phone number or email address"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                          <div className="input-group">
                            <span className="input-group-text" id="phonePrefix">+62</span>
                            <input
                              type="text"
                              id="phoneNumber"
                              className="form-control"
                              placeholder="Enter phone number"
                              aria-describedby="phonePrefix"
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center p-0">
                    <div className="w-100 h-100">
                      <img
                        src="https://www.whitesky.co.id/images/UH5_big.jpg"
                        alt="Whitesky Aviation"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "0.3rem",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
