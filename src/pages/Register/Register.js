import { useEffect, useState } from 'react';
import { registerApi } from '../../util/api';
import { useNavigate } from 'react-router-dom';
import Notification from '../../toast/Notification';

function Register() {
  const initialValues = {
    name: '',
    password: '',
    email: '',
    phone: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [notification, setNotification] = useState(null);
  const [formErrors, SetFormErrors] = useState({});

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^@]+@[^@]+\.[^@]{2,}$/i;

    if (!values.name) {
      errors.name = 'Name is requried!';
    }
    if (!values.password) {
      errors.password = 'Password is requried!';
    }
    if (!values.email) {
      console.log('chưa có email');
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid email format!';
    }
    if (!values.phone) {
      errors.phone = 'Phone is requried!';
    }

    return errors;
  };

  const handleRegister = async () => {
    const errors = validate(formValues);
    SetFormErrors(errors);

    if (Object.keys(errors).length == 0) {
      console.log('đã vào');
      const { name, password, email, phone } = formValues;
      try {
        const result = await registerApi(name, password, email, phone);

        if (result.data.success == 1) {
          setNotification({ message: 'Register successfully', type: 'success' });

          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          setNotification({ message: 'Register fail', type: 'error' });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    console.log('formValues', formValues);
  });

  // const handleRegister = async (values) => {
  //   const { name, email, phone, password, confirmPassword } = values;

  //   const res = await registerApi(name, email, phone, password);

  //   if (res.data.success == 1) {
  //     setNotification({ message: 'Đăng ký thành công!', type: 'success' });

  //     setTimeout(() => {
  //       navigate('/login');
  //     }, 2000);
  //   } else {
  //     setNotification({ message: 'Đăng ký thất bại', type: 'error' });
  //   }
  // };

  return (
    <div className="font-[sans-serif]">
      {notification && (
        <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />
      )}
      <div className="min-h-screen flex flex-col items-center py-20 px-10">
        <div>
          <h2 className="lg:text-3xl text-xl font-extrabold lg:leading-[55px]text-gray-800">GYMSHARK REGISTER</h2>
          <p className="text-sm mt-6 text-gray-800">
            One account, across all apps, just to make things a little easier.
          </p>
          {/* regiter input */}
          <form className="max-w-md md:ml-auto w-full pt-6">
            <div class="space-y-4">
              <div>
                <input
                  name="name"
                  type="name"
                  autocomplete="name"
                  value={formValues.name}
                  required
                  class="border border-gray-300 bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Name of user"
                  onChange={handleFormChange}
                />
                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
              </div>

              <div>
                <input
                  name="birthday"
                  type="birthday"
                  autocomplete="birthday"
                  required
                  class="border border-gray-300 bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Date of birth"
                  onChange={handleFormChange}
                />
              </div>

              <div>
                <input
                  name="phone"
                  type="phone"
                  autocomplete="phone"
                  value={formValues.phone}
                  required
                  class="border border-gray-300 bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Phone number"
                  onChange={handleFormChange}
                />
                {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formValues.email}
                  required
                  className="border border-gray-300 bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Email address"
                  onChange={handleFormChange}
                />
              </div>

              <div>
                <input
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  value={formValues.password}
                  required
                  class="border border-gray-300 bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Password"
                  onChange={handleFormChange}
                />
                {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
              </div>
            </div>

            <div class="!mt-8">
              <button
                type="button"
                class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>

            <div class="my-4 flex items-center gap-4">
              <hr class="w-full border-gray-300" />
              <p class="text-sm text-gray-800 text-center">or</p>
              <hr class="w-full border-gray-300" />
            </div>

            <div class="space-x-6 flex justify-center">
              <button type="button" class="border-none outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 512 512">
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg>
              </button>
              <button type="button" class="border-none outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 512 512">
                  <path
                    fill="#1877f2"
                    d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z"
                    data-original="#1877f2"
                  />
                  <path
                    fill="#fff"
                    d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z"
                    data-original="#ffffff"
                  />
                </svg>
              </button>
              <button type="button" class="border-none outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 22.773 22.773">
                  <path
                    d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </form>

          <p class="text-sm mt-12 text-gray-800">
            Already have an account?
            <a href="http://localhost:3001/login" class="text-blue-600 font-semibold hover:underline ml-1">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
