import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Wrap } from "../testUtils";
import Home from "../../pages/Home";

it("Snapshots - Home page", () => {
  const pageRender = render(
    <Wrap>
      <Home />
    </Wrap>
  );
  expect(pageRender).toMatchInlineSnapshot(`
    {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <div
            class="MuiBox-root css-1vxq09p"
          >
            <div
              class="MuiBox-root css-13kul02"
            >
              <div
                class="MuiBox-root css-od86oj"
              >
                <img
                  alt=""
                  src="/src/assets/logo.svg"
                />
              </div>
              <div
                class="MuiBox-root css-cnqlme"
              >
                <ul>
                  <li>
                    <a
                      aria-current="page"
                      class="active"
                      href="/"
                    >
                      <svg
                        fill="none"
                        height="20"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M1 0H8C8.6 0 9 0.4 9 1V8C9 8.6 8.6 9 8 9H1C0.4 9 0 8.6 0 8V1C0 0.4 0.4 0 1 0ZM1 11H8C8.6 11 9 11.4 9 12V19C9 19.6 8.6 20 8 20H1C0.4 20 0 19.6 0 19V12C0 11.4 0.4 11 1 11ZM19 0H12C11.4 0 11 0.4 11 1V8C11 8.6 11.4 9 12 9H19C19.6 9 20 8.6 20 8V1C20 0.4 19.6 0 19 0ZM12 11H19C19.6 11 20 11.4 20 12V19C20 19.6 19.6 20 19 20H12C11.4 20 11 19.6 11 19V12C11 11.4 11.4 11 12 11Z"
                          fill-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      class=""
                      data-testid="toMovies"
                      href="/movies"
                    >
                      <svg
                        fill="none"
                        height="20"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M16.9556 0H3.04444C1.36304 0 0 1.36304 0 3.04444V16.9556C0 18.637 1.36304 20 3.04444 20H16.9556C17.763 20 18.5374 19.6792 19.1083 19.1083C19.6792 18.5374 20 17.763 20 16.9556V3.04444C20 2.23701 19.6792 1.46264 19.1083 0.891697C18.5374 0.320753 17.763 0 16.9556 0ZM4 9H2V7H4V9ZM4 11H2V13H4V11ZM18 9H16V7H18V9ZM18 11H16V13H18V11ZM18 2.74V4H16V2H17.26C17.4563 2 17.6445 2.07796 17.7833 2.21674C17.922 2.35552 18 2.54374 18 2.74ZM4 2H2.74C2.54374 2 2.35552 2.07796 2.21674 2.21674C2.07796 2.35552 2 2.54374 2 2.74V4H4V2ZM2 17.26V16H4V18H2.74C2.54374 18 2.35552 17.922 2.21674 17.7833C2.07796 17.6445 2 17.4563 2 17.26ZM17.26 18C17.6687 18 18 17.6687 18 17.26V16H16V18H17.26Z"
                          fill-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      class=""
                      href="/tv"
                    >
                      <svg
                        fill="none"
                        height="20"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M9.08 4.48109H20V20H0V4.48109H4.92L2.22 1.20272L3.78 0.029098L7 3.90883L10.22 0L11.78 1.20272L9.08 4.48109ZM2 6.42095V18.0601H12V6.42095H2ZM17 14.1804H15V12.2405H17V14.1804ZM15 10.3007H17V8.36082H15V10.3007Z"
                          fill-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <span
                      class="MuiBadge-root css-1c32n2y-MuiBadge-root"
                    >
                      <a
                        class=""
                        href="/bookmarks"
                      >
                        <svg
                          fill="none"
                          height="20"
                          viewBox="0 0 17 20"
                          width="17"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.3866 0C15.5893 0 15.7832 0.0396563 15.9683 0.118969C16.2591 0.233532 16.4904 0.414188 16.6623 0.660939C16.8341 0.907689 16.92 1.18088 16.92 1.4805V18.5195C16.92 18.8191 16.8341 19.0923 16.6623 19.3391C16.4904 19.5858 16.2591 19.7665 15.9683 19.881C15.8008 19.9515 15.607 19.9868 15.3866 19.9868C14.9636 19.9868 14.5979 19.8458 14.2895 19.5638L8.46001 13.959L2.63054 19.5638C2.31328 19.8546 1.94757 20 1.53338 20C1.33069 20 1.13681 19.9603 0.951751 19.881C0.660939 19.7665 0.42961 19.5858 0.257766 19.3391C0.085922 19.0923 0 18.8191 0 18.5195V1.4805C0 1.18088 0.085922 0.907689 0.257766 0.660939C0.42961 0.414188 0.660939 0.233532 0.951751 0.118969C1.13681 0.0396563 1.33069 0 1.53338 0H15.3866Z"
                          />
                        </svg>
                      </a>
                      <span
                        class="MuiBadge-badge MuiBadge-standard MuiBadge-invisible MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorError css-118y05j-MuiBadge-badge"
                      />
                    </span>
                  </li>
                </ul>
              </div>
              <div
                class="MuiBox-root css-kyzppj"
              >
                <a
                  data-testid="profileLink"
                  href="/profile"
                />
              </div>
            </div>
            <div
              class="MuiBox-root css-pi3l4k"
            >
              <div
                class="MuiBox-root css-nhy50b"
              >
                <div
                  class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-19t6qcd-MuiFormControl-root-MuiTextField-root"
                >
                  <div
                    class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-953pxc-MuiInputBase-root-MuiInput-root"
                  >
                    <input
                      aria-invalid="false"
                      class="MuiInputBase-input MuiInput-input MuiInputBase-inputTypeSearch css-c63i49-MuiInputBase-input-MuiInput-input"
                      id=":r0:"
                      placeholder="Search for movies or TV series"
                      type="search"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div
                class="MuiBox-root css-f9enc6"
              >
                <h2
                  class="MuiTypography-root MuiTypography-h2 css-1sra7t5-MuiTypography-root"
                >
                  Trending
                </h2>
                <div>
                  <span
                    class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-e9pa37-MuiSkeleton-root"
                    style="height: 180px;"
                  />
                </div>
                <h2
                  class="MuiTypography-root MuiTypography-h2 css-1sra7t5-MuiTypography-root"
                >
                  Recommended for you
                </h2>
                <div>
                  <div
                    class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 css-480o17-MuiGrid-root"
                    data-testid="loadingSkelets"
                  >
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                    <div
                      class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                    >
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                        style="height: 140px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                        style="height: 16px;"
                      />
                      <span
                        class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                        style="height: 20px;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>,
      "container": <div>
        <div
          class="MuiBox-root css-1vxq09p"
        >
          <div
            class="MuiBox-root css-13kul02"
          >
            <div
              class="MuiBox-root css-od86oj"
            >
              <img
                alt=""
                src="/src/assets/logo.svg"
              />
            </div>
            <div
              class="MuiBox-root css-cnqlme"
            >
              <ul>
                <li>
                  <a
                    aria-current="page"
                    class="active"
                    href="/"
                  >
                    <svg
                      fill="none"
                      height="20"
                      viewBox="0 0 20 20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M1 0H8C8.6 0 9 0.4 9 1V8C9 8.6 8.6 9 8 9H1C0.4 9 0 8.6 0 8V1C0 0.4 0.4 0 1 0ZM1 11H8C8.6 11 9 11.4 9 12V19C9 19.6 8.6 20 8 20H1C0.4 20 0 19.6 0 19V12C0 11.4 0.4 11 1 11ZM19 0H12C11.4 0 11 0.4 11 1V8C11 8.6 11.4 9 12 9H19C19.6 9 20 8.6 20 8V1C20 0.4 19.6 0 19 0ZM12 11H19C19.6 11 20 11.4 20 12V19C20 19.6 19.6 20 19 20H12C11.4 20 11 19.6 11 19V12C11 11.4 11.4 11 12 11Z"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    class=""
                    data-testid="toMovies"
                    href="/movies"
                  >
                    <svg
                      fill="none"
                      height="20"
                      viewBox="0 0 20 20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M16.9556 0H3.04444C1.36304 0 0 1.36304 0 3.04444V16.9556C0 18.637 1.36304 20 3.04444 20H16.9556C17.763 20 18.5374 19.6792 19.1083 19.1083C19.6792 18.5374 20 17.763 20 16.9556V3.04444C20 2.23701 19.6792 1.46264 19.1083 0.891697C18.5374 0.320753 17.763 0 16.9556 0ZM4 9H2V7H4V9ZM4 11H2V13H4V11ZM18 9H16V7H18V9ZM18 11H16V13H18V11ZM18 2.74V4H16V2H17.26C17.4563 2 17.6445 2.07796 17.7833 2.21674C17.922 2.35552 18 2.54374 18 2.74ZM4 2H2.74C2.54374 2 2.35552 2.07796 2.21674 2.21674C2.07796 2.35552 2 2.54374 2 2.74V4H4V2ZM2 17.26V16H4V18H2.74C2.54374 18 2.35552 17.922 2.21674 17.7833C2.07796 17.6445 2 17.4563 2 17.26ZM17.26 18C17.6687 18 18 17.6687 18 17.26V16H16V18H17.26Z"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    class=""
                    href="/tv"
                  >
                    <svg
                      fill="none"
                      height="20"
                      viewBox="0 0 20 20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M9.08 4.48109H20V20H0V4.48109H4.92L2.22 1.20272L3.78 0.029098L7 3.90883L10.22 0L11.78 1.20272L9.08 4.48109ZM2 6.42095V18.0601H12V6.42095H2ZM17 14.1804H15V12.2405H17V14.1804ZM15 10.3007H17V8.36082H15V10.3007Z"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <span
                    class="MuiBadge-root css-1c32n2y-MuiBadge-root"
                  >
                    <a
                      class=""
                      href="/bookmarks"
                    >
                      <svg
                        fill="none"
                        height="20"
                        viewBox="0 0 17 20"
                        width="17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3866 0C15.5893 0 15.7832 0.0396563 15.9683 0.118969C16.2591 0.233532 16.4904 0.414188 16.6623 0.660939C16.8341 0.907689 16.92 1.18088 16.92 1.4805V18.5195C16.92 18.8191 16.8341 19.0923 16.6623 19.3391C16.4904 19.5858 16.2591 19.7665 15.9683 19.881C15.8008 19.9515 15.607 19.9868 15.3866 19.9868C14.9636 19.9868 14.5979 19.8458 14.2895 19.5638L8.46001 13.959L2.63054 19.5638C2.31328 19.8546 1.94757 20 1.53338 20C1.33069 20 1.13681 19.9603 0.951751 19.881C0.660939 19.7665 0.42961 19.5858 0.257766 19.3391C0.085922 19.0923 0 18.8191 0 18.5195V1.4805C0 1.18088 0.085922 0.907689 0.257766 0.660939C0.42961 0.414188 0.660939 0.233532 0.951751 0.118969C1.13681 0.0396563 1.33069 0 1.53338 0H15.3866Z"
                        />
                      </svg>
                    </a>
                    <span
                      class="MuiBadge-badge MuiBadge-standard MuiBadge-invisible MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorError css-118y05j-MuiBadge-badge"
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div
              class="MuiBox-root css-kyzppj"
            >
              <a
                data-testid="profileLink"
                href="/profile"
              />
            </div>
          </div>
          <div
            class="MuiBox-root css-pi3l4k"
          >
            <div
              class="MuiBox-root css-nhy50b"
            >
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-19t6qcd-MuiFormControl-root-MuiTextField-root"
              >
                <div
                  class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-953pxc-MuiInputBase-root-MuiInput-root"
                >
                  <input
                    aria-invalid="false"
                    class="MuiInputBase-input MuiInput-input MuiInputBase-inputTypeSearch css-c63i49-MuiInputBase-input-MuiInput-input"
                    id=":r0:"
                    placeholder="Search for movies or TV series"
                    type="search"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div
              class="MuiBox-root css-f9enc6"
            >
              <h2
                class="MuiTypography-root MuiTypography-h2 css-1sra7t5-MuiTypography-root"
              >
                Trending
              </h2>
              <div>
                <span
                  class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-e9pa37-MuiSkeleton-root"
                  style="height: 180px;"
                />
              </div>
              <h2
                class="MuiTypography-root MuiTypography-h2 css-1sra7t5-MuiTypography-root"
              >
                Recommended for you
              </h2>
              <div>
                <div
                  class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 css-480o17-MuiGrid-root"
                  data-testid="loadingSkelets"
                >
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                  <div
                    class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-16cooyn-MuiGrid-root"
                  >
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1ffqikw-MuiSkeleton-root"
                      style="height: 140px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-1k6vl8s-MuiSkeleton-root"
                      style="height: 16px;"
                    />
                    <span
                      class="MuiSkeleton-root MuiSkeleton-rounded MuiSkeleton-pulse css-n2devz-MuiSkeleton-root"
                      style="height: 20px;"
                    />
                  </div>
                </div>
              </div>
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
