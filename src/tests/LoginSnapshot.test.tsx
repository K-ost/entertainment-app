import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Wrap } from "./HomeSnapshot.test";
import LoginPage from "../pages/LoginPage";

it("Snapshots - Login", () => {
  const pageRender = render(
    <Wrap>
      <LoginPage />
    </Wrap>
  );
  expect(pageRender).toMatchInlineSnapshot(`
    {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <div
            class="MuiBox-root css-0"
          >
            <div
              class="MuiBox-root css-1ckqa5t"
            >
              <a
                href="/"
              >
                <img
                  alt=""
                  src="/src/assets/logo.svg"
                  style="display: block; margin: 0px auto;"
                />
              </a>
            </div>
            <div
              class="MuiBox-root css-v49nzo"
            >
              <h1
                class="MuiTypography-root MuiTypography-h1 css-yz1xox-MuiTypography-root"
              >
                Login
              </h1>
              <form
                novalidate=""
              >
                <div
                  class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-10xu0kl-MuiFormControl-root-MuiTextField-root"
                >
                  <div
                    class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-953pxc-MuiInputBase-root-MuiInput-root"
                  >
                    <input
                      aria-invalid="false"
                      class="MuiInputBase-input MuiInput-input css-1x51dt5-MuiInputBase-input-MuiInput-input"
                      id=":r1:"
                      name="email"
                      placeholder="Email address"
                      type="email"
                      value=""
                    />
                  </div>
                </div>
                <div
                  class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-10xu0kl-MuiFormControl-root-MuiTextField-root"
                >
                  <div
                    class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-953pxc-MuiInputBase-root-MuiInput-root"
                  >
                    <input
                      aria-invalid="false"
                      class="MuiInputBase-input MuiInput-input css-1x51dt5-MuiInputBase-input-MuiInput-input"
                      id=":r2:"
                      name="password"
                      placeholder="Password"
                      type="password"
                      value=""
                    />
                  </div>
                </div>
                <div
                  class="MuiBox-root css-12layeo"
                >
                  <button
                    class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorError MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorError MuiButton-fullWidth css-mm0puw-MuiButtonBase-root-MuiButton-root"
                    tabindex="0"
                    type="submit"
                  >
                    Login to your account
                    <span
                      class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                    />
                  </button>
                </div>
              </form>
              <div
                class="MuiBox-root css-xi606m"
              >
                Don't have an account? 
                <a
                  href="/signup"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>,
      "container": <div>
        <div
          class="MuiBox-root css-0"
        >
          <div
            class="MuiBox-root css-1ckqa5t"
          >
            <a
              href="/"
            >
              <img
                alt=""
                src="/src/assets/logo.svg"
                style="display: block; margin: 0px auto;"
              />
            </a>
          </div>
          <div
            class="MuiBox-root css-v49nzo"
          >
            <h1
              class="MuiTypography-root MuiTypography-h1 css-yz1xox-MuiTypography-root"
            >
              Login
            </h1>
            <form
              novalidate=""
            >
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-10xu0kl-MuiFormControl-root-MuiTextField-root"
              >
                <div
                  class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-953pxc-MuiInputBase-root-MuiInput-root"
                >
                  <input
                    aria-invalid="false"
                    class="MuiInputBase-input MuiInput-input css-1x51dt5-MuiInputBase-input-MuiInput-input"
                    id=":r1:"
                    name="email"
                    placeholder="Email address"
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-10xu0kl-MuiFormControl-root-MuiTextField-root"
              >
                <div
                  class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-953pxc-MuiInputBase-root-MuiInput-root"
                >
                  <input
                    aria-invalid="false"
                    class="MuiInputBase-input MuiInput-input css-1x51dt5-MuiInputBase-input-MuiInput-input"
                    id=":r2:"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <div
                class="MuiBox-root css-12layeo"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorError MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorError MuiButton-fullWidth css-mm0puw-MuiButtonBase-root-MuiButton-root"
                  tabindex="0"
                  type="submit"
                >
                  Login to your account
                  <span
                    class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                  />
                </button>
              </div>
            </form>
            <div
              class="MuiBox-root css-xi606m"
            >
              Don't have an account? 
              <a
                href="/signup"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>,
      "debug": [Function],
      "findAllByAltText": [Function],
      "findAllByDisplayValue": [Function],
      "findAllByLabelText": [Function],
      "findAllByPlaceholderText": [Function],
      "findAllByRole": [Function],
      "findAllByTestId": [Function],
      "findAllByText": [Function],
      "findAllByTitle": [Function],
      "findByAltText": [Function],
      "findByDisplayValue": [Function],
      "findByLabelText": [Function],
      "findByPlaceholderText": [Function],
      "findByRole": [Function],
      "findByTestId": [Function],
      "findByText": [Function],
      "findByTitle": [Function],
      "getAllByAltText": [Function],
      "getAllByDisplayValue": [Function],
      "getAllByLabelText": [Function],
      "getAllByPlaceholderText": [Function],
      "getAllByRole": [Function],
      "getAllByTestId": [Function],
      "getAllByText": [Function],
      "getAllByTitle": [Function],
      "getByAltText": [Function],
      "getByDisplayValue": [Function],
      "getByLabelText": [Function],
      "getByPlaceholderText": [Function],
      "getByRole": [Function],
      "getByTestId": [Function],
      "getByText": [Function],
      "getByTitle": [Function],
      "queryAllByAltText": [Function],
      "queryAllByDisplayValue": [Function],
      "queryAllByLabelText": [Function],
      "queryAllByPlaceholderText": [Function],
      "queryAllByRole": [Function],
      "queryAllByTestId": [Function],
      "queryAllByText": [Function],
      "queryAllByTitle": [Function],
      "queryByAltText": [Function],
      "queryByDisplayValue": [Function],
      "queryByLabelText": [Function],
      "queryByPlaceholderText": [Function],
      "queryByRole": [Function],
      "queryByTestId": [Function],
      "queryByText": [Function],
      "queryByTitle": [Function],
      "rerender": [Function],
      "unmount": [Function],
    }
  `);
});
