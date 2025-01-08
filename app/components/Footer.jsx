export default function Footer() {
  return (
    <section className="w-full max-w-[1440px] px-6 mx-auto pb-6">
      <div className="footer bg-dark rounded-b-xl">
        <div className="py-[56px] sm:py-[116px]">
          <div className="flex flex-col gap-1">
            <h3 className="text-center font-rocGroteskMid tracking-[-0.9px] text-white text-lg sm:text-[30px]">
              Get in touch today
            </h3>
            <h2 className="text-white sm:tracking-[-2.34px] text-[28px] sm:text-[78px] text-center leading-normal font-rocGroteskBold">
              hellomanjurul@gmail.com
            </h2>

            <div className="flex justify-center items-center gap-[30px]">
              <div className="flex items-center gap-1">
                {/* Behance Link  */}
                <span className="flex justify-center w-[40px] h-[40px] p-3 border border-transparent hover:border-white rounded-lg transition-all duration-400 ease-linear">
                  <a
                    href="https://www.behance.net/manjuruldesign"
                    target="_blank"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 30 20"
                      fill="none"
                    >
                      <path
                        id="Vector"
                        d="M26.6652 3.36022H18.2147V0.945801H26.6652V3.36022ZM28.7488 15.4323C28.2152 16.9981 26.2994 19.054 22.5908 19.054C18.8799 19.054 15.8739 16.9667 15.8739 12.203C15.8739 7.48285 18.6807 5.05635 22.4725 5.05635C26.1932 5.05635 28.4651 7.2076 28.9613 10.3995C29.0554 11.0103 29.0929 11.8336 29.076 12.9829H19.3857C19.5426 16.8593 23.5904 16.9812 24.9244 15.4323H28.7488ZM19.4702 10.6035H25.464C25.3372 8.73593 24.0926 7.92469 22.4737 7.92469C20.704 7.92469 19.7249 8.85182 19.4702 10.6035ZM7.91236 19.0395H0.106537V0.971152H8.50027C15.111 1.06894 15.2365 7.54321 11.7839 9.30815C15.962 10.8292 16.1021 19.0395 7.91236 19.0395ZM3.72817 8.18906H8.05481C11.0825 8.18906 11.563 4.56743 7.67816 4.56743H3.72817V8.18906ZM7.82182 11.8107H3.72817V15.4516H7.76146C11.4495 15.4516 11.2237 11.8107 7.82182 11.8107Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </span>

                {/* Dribbble Link */}
                <span className="flex justify-center w-[40px] h-[40px] p-3 border border-transparent hover:border-white rounded-lg transition-all duration-400 ease-linear">
                  <a
                    href="https://dribbble.com/manjuruldesign"
                    target="_blank"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.56657 0.5C4.32178 0.5 0.0665741 4.75521 0.0665741 10C0.0665741 15.2448 4.32178 19.5 9.56657 19.5C14.8011 19.5 19.0666 15.2448 19.0666 10C19.0666 4.75521 14.8011 0.5 9.56657 0.5ZM15.8413 4.87871C17.011 6.30318 17.6582 8.08488 17.6756 9.92796C17.408 9.8765 14.729 9.33025 12.0294 9.67067C11.9669 9.53608 11.9154 9.392 11.8537 9.24792C11.6858 8.85161 11.5074 8.45986 11.3185 8.07308C14.3063 6.85708 15.6664 5.10592 15.8413 4.87871ZM9.56657 1.90204C11.6273 1.90204 13.513 2.67392 14.9452 3.94138C14.8011 4.14721 13.5748 5.78596 10.6899 6.86738C9.35995 4.42588 7.88745 2.42613 7.66024 2.11738C8.28512 1.97146 8.92489 1.89893 9.56657 1.90125V1.90204ZM6.11491 2.66363C6.33103 2.95258 7.77345 4.96183 9.12324 7.35187C5.33116 8.36204 1.98241 8.34146 1.6222 8.34146C2.14787 5.82712 3.84837 3.73554 6.11491 2.66363ZM1.44724 10.0103V9.76329C1.79795 9.77358 5.73332 9.82504 9.78349 8.60904C10.0202 9.06267 10.2363 9.52579 10.4422 9.98971C10.3392 10.0206 10.226 10.0515 10.1231 10.0823C5.93995 11.4321 3.71378 15.1205 3.52853 15.43C2.18857 13.9429 1.44708 12.0121 1.44724 10.0103ZM9.56657 18.1193C7.76317 18.1222 6.01092 17.5201 4.59016 16.4093C4.73424 16.1101 6.38249 12.9363 10.9575 11.3395C10.9781 11.3292 10.9892 11.3292 11.009 11.3189C12.1529 14.2758 12.6161 16.7593 12.7404 17.4702C11.7611 17.8929 10.6899 18.1193 9.56657 18.1193ZM14.0902 16.7284C14.0078 16.2336 13.5748 13.8641 12.5132 10.9476C15.0584 10.5463 17.2837 11.2057 17.5624 11.2983C17.2117 13.5546 15.9134 15.5021 14.0902 16.7284Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </span>

                {/* Figma Link */}
                <span className="flex justify-center w-[40px] h-[40px] p-3 border border-transparent hover:border-white rounded-lg transition-all duration-400 ease-linear">
                  <a
                    href="https://www.figma.com/@manjuruldesign"
                    target="_blank"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="22"
                      viewBox="0 0 15 22"
                      fill="none"
                    >
                      <g id="Group">
                        <g id="Group_2">
                          <path
                            id="Vector"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.38415 0.436523C2.23011 0.436523 0.497721 2.24374 0.497721 4.45764C0.497721 5.80358 1.13856 6.999 2.1236 7.72876C1.61592 8.10911 1.20442 8.60312 0.922072 9.17117C0.639727 9.73923 0.494393 10.3655 0.497721 10.9999C0.497721 12.3467 1.13856 13.5412 2.1236 14.271C1.61592 14.6513 1.20442 15.1454 0.922072 15.7134C0.639727 16.2815 0.494393 16.9078 0.497721 17.5421C0.497721 19.756 2.23011 21.5632 4.38415 21.5632C6.53732 21.5632 8.27059 19.756 8.27059 17.5421V14.1425C8.95133 14.7101 9.80942 15.0212 10.6958 15.0219C12.8498 15.021 14.5822 13.2138 14.5822 10.9999C14.5857 10.3655 14.4405 9.73912 14.1581 9.17103C13.8758 8.60294 13.4641 8.10897 12.9563 7.72876C13.464 7.3484 13.8755 6.85439 14.1578 6.28634C14.4402 5.71829 14.5855 5.09198 14.5822 4.45764C14.5822 2.24374 12.8498 0.436523 10.6958 0.436523H4.38415ZM1.9581 4.45764C1.9581 3.05711 3.05141 1.93564 4.38415 1.93564H6.80932V6.97964H4.38415C3.05141 6.97964 1.9581 5.85728 1.9581 4.45764ZM10.6958 6.97876H8.27059V1.93476H10.6958C12.0294 1.93476 13.1218 3.05711 13.1218 4.45764C13.1218 5.85728 12.0294 6.97876 10.6958 6.97876ZM1.95898 10.9999C1.95898 9.60023 3.05229 8.47787 4.38503 8.47787H6.8102V13.5219H4.38415C3.05053 13.5219 1.9581 12.3995 1.9581 10.9999H1.95898ZM8.27059 10.9999C8.27059 9.60023 9.36389 8.47787 10.6966 8.47787C12.0303 8.47787 13.1227 9.59935 13.1227 10.9999C13.1227 12.3995 12.0303 13.5219 10.6966 13.5219C9.36389 13.5219 8.27147 12.4004 8.27147 10.9999H8.27059ZM1.95898 17.5421C1.95898 16.1425 3.05229 15.021 4.38503 15.021H6.8102V17.5421C6.8102 18.9426 5.71866 20.0641 4.38503 20.0641C3.05229 20.0641 1.95898 18.9426 1.95898 17.5421Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </span>

                {/* Medium Link */}
                <span className="flex justify-center w-[40px] h-[40px] p-3 border border-transparent hover:border-white rounded-lg transition-all duration-400 ease-linear">
                  <a
                    href="https://medium.com/@manjuruldesign"
                    target="_blank"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="16"
                      viewBox="0 0 22 16"
                      fill="none"
                    >
                      <path
                        id="Vector"
                        d="M2.50378 3.26461C2.51654 3.14263 2.49913 3.01948 2.45295 2.90518C2.40677 2.79087 2.33312 2.68864 2.23801 2.6068L0.27798 0.340064V0H6.36625L11.0725 9.90436L15.2096 0H21.0133V0.339001L19.3357 1.88098C19.2655 1.93346 19.2112 2.00303 19.1785 2.08245C19.1457 2.16188 19.1358 2.24826 19.1496 2.33263V13.6674C19.1356 13.7518 19.1454 13.8382 19.1781 13.9177C19.2109 13.9971 19.2653 14.0667 19.3357 14.119L20.9735 15.661V16H12.7391V15.661L14.4323 14.0808C14.6006 13.9214 14.6006 13.8735 14.6006 13.6302V4.46759L9.88434 15.9628H9.24761L3.75731 4.46759V12.1711C3.71191 12.4952 3.82375 12.8215 4.06183 13.0563L6.2677 15.6249V15.9639H0.0133209V15.6249L2.21918 13.0563C2.33523 12.9403 2.4214 12.7998 2.47082 12.6461C2.52023 12.4924 2.53152 12.3297 2.50378 12.1711V3.26461Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </span>
              </div>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="16"
                  viewBox="0 0 46 16"
                  fill="none"
                >
                  <path
                    d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM45.7071 8.70711C46.0976 8.31658 46.0976 7.68342 45.7071 7.29289L39.3431 0.928932C38.9526 0.538408 38.3195 0.538408 37.9289 0.928932C37.5384 1.31946 37.5384 1.95262 37.9289 2.34315L43.5858 8L37.9289 13.6569C37.5384 14.0474 37.5384 14.6805 37.9289 15.0711C38.3195 15.4616 38.9526 15.4616 39.3431 15.0711L45.7071 8.70711ZM1 9H45V7H1V9Z"
                    fill="white"
                  />
                </svg>
              </span>

              <div className="flex items-center gap-1">
                {/* Facebook Link  */}
                <span className="flex justify-center w-[40px] h-[40px] p-3 border border-transparent hover:border-white rounded-lg transition-all duration-400 ease-linear">
                  <a
                    href="https://www.facebook.com/manjuruldesign"
                    target="_blank"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="18"
                      viewBox="0 0 9 18"
                      fill="none"
                    >
                      <path
                        id="Vector"
                        d="M5.68377 17.5V9.75811H8.05309L8.40527 6.72692H5.68377V4.79617C5.68377 3.92148 5.90485 3.3226 7.04366 3.3226H8.48668V0.620123C7.78457 0.537179 7.07884 0.49713 6.37271 0.50016C4.27845 0.50016 2.84058 1.90949 2.84058 4.49673V6.72125H0.486679V9.75245H2.84572V17.5H5.68377Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </span>

                {/* Linkedin Link  */}
                <span className="flex justify-center w-[40px] h-[40px] p-3 border border-transparent hover:border-white rounded-lg transition-all duration-400 ease-linear">
                  <a
                    href="https://www.linkedin.com/in/manjuruldesign/"
                    target="_blank"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.14615 6.42365H10.4888V7.99615C10.9703 7.09175 12.2051 6.27915 14.06 6.27915C17.6159 6.27915 18.4601 8.07945 18.4601 11.3826V17.5H14.8601V12.1348C14.8601 10.2537 14.3786 9.19295 13.1528 9.19295C11.4527 9.19295 10.7462 10.3362 10.7462 12.134V17.5H7.14615V6.42365ZM0.973052 17.3555H4.57305V6.27915H0.973052V17.3555ZM5.08875 2.6675C5.08889 2.95248 5.02904 3.23465 4.9127 3.4976C4.79636 3.76055 4.62584 3.99904 4.41105 4.1992C3.97581 4.60773 3.38668 4.83641 2.77305 4.835C2.1605 4.83461 1.57273 4.60652 1.13685 4.20005C0.922843 3.99921 0.7529 3.76045 0.636762 3.49747C0.520624 3.23448 0.460574 2.95244 0.460052 2.6675C0.460052 2.09205 0.703052 1.54125 1.13775 1.13495C1.57325 0.727935 2.16127 0.499746 2.77395 0.5C3.38775 0.5 3.97635 0.72865 4.41105 1.13495C4.84485 1.54125 5.08875 2.09205 5.08875 2.6675Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </span>

                {/* Instagram Link  */}
                <span className="flex justify-center w-[40px] h-[40px] p-3 border border-transparent hover:border-white rounded-lg transition-all duration-400 ease-linear">
                  <a
                    href="https://www.instagram.com/manjuruldesign"
                    target="_blank"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <path
                        id="Vector"
                        d="M9.43341 0.500977C6.9871 0.500977 6.68223 0.512133 5.72485 0.550383C4.76354 0.595008 4.11329 0.735789 3.53954 0.946164C2.93905 1.16027 2.39523 1.49548 1.94598 1.92845C1.48627 2.35174 1.13114 2.86564 0.905915 3.43348C0.683165 3.97535 0.534102 4.58948 0.486852 5.49738C0.44354 6.4021 0.43454 6.68951 0.43454 8.99991C0.43454 11.3103 0.446352 11.5983 0.486852 12.5024C0.534102 13.4077 0.683165 14.0245 0.905915 14.5664C1.13261 15.1335 1.48755 15.6471 1.94598 16.0714C2.39418 16.5056 2.9383 16.841 3.53954 17.0537C4.11329 17.2614 4.76635 17.4048 5.72485 17.4494C6.68279 17.4904 6.9871 17.4989 9.43341 17.4989C11.8797 17.4989 12.1846 17.4877 13.142 17.4494C14.1005 17.4048 14.7535 17.2609 15.3273 17.0537C15.9278 16.8396 16.4716 16.5043 16.9209 16.0714C17.3812 15.6485 17.7364 15.1345 17.9609 14.5664C18.1809 14.0245 18.3327 13.4077 18.38 12.5024C18.4233 11.5977 18.4323 11.3103 18.4323 8.99991C18.4323 6.68951 18.4205 6.40157 18.38 5.49738C18.3327 4.59213 18.1803 3.97216 17.9609 3.43348C17.7342 2.86635 17.3793 2.35274 16.9209 1.92845C16.4731 1.49372 15.9289 1.15823 15.3273 0.946164C14.7535 0.735789 14.1005 0.595008 13.142 0.550383C12.184 0.509477 11.8797 0.500977 9.43341 0.500977ZM9.43341 2.03098C11.8359 2.03098 12.1227 2.04213 13.0722 2.08038C13.948 2.11916 14.425 2.25729 14.7417 2.37416C15.1332 2.51065 15.4876 2.7279 15.779 3.01007C16.0772 3.2841 16.3064 3.618 16.4495 3.98704C16.5732 4.28613 16.7195 4.73663 16.7605 5.56379C16.801 6.46054 16.8129 6.73201 16.8129 9.00045C16.8129 11.2689 16.801 11.5404 16.7572 12.4371C16.7099 13.2643 16.5637 13.7148 16.4405 14.0139C16.27 14.4128 16.0799 14.6917 15.766 14.9935C15.4737 15.2739 15.1195 15.4901 14.7288 15.6267C14.416 15.7436 13.9323 15.8817 13.0531 15.9205C12.0985 15.9588 11.8173 15.9699 9.40866 15.9699C7.00004 15.9699 6.71935 15.9588 5.76366 15.9173C4.88785 15.8727 4.40466 15.7346 4.08798 15.6182C3.66048 15.4573 3.36741 15.2777 3.05354 14.9813C2.73685 14.6822 2.53548 14.3974 2.38023 14.0016C2.25423 13.7063 2.11023 13.2494 2.06354 12.419C2.03148 11.5281 2.01629 11.2519 2.01629 8.9877C2.01629 6.72457 2.03148 6.44779 2.06354 5.54573C2.11023 4.71538 2.25423 4.25957 2.38023 3.96313C2.53548 3.55885 2.73741 3.2826 3.05354 2.98351C3.36685 2.6876 3.66048 2.49635 4.08798 2.34654C4.40466 2.2302 4.87604 2.09207 5.75523 2.05063C6.70979 2.01823 6.99104 2.00654 9.39629 2.00654L9.43341 2.03098ZM9.43341 4.63782C8.82667 4.63761 8.22583 4.75032 7.66523 4.96952C7.10463 5.18871 6.59525 5.51009 6.16622 5.91529C5.73719 6.32049 5.3969 6.80156 5.16481 7.33102C4.93272 7.86048 4.81338 8.42794 4.8136 9.00098C4.81338 9.57401 4.93272 10.1415 5.16481 10.6709C5.3969 11.2004 5.73719 11.6815 6.16622 12.0867C6.59525 12.4919 7.10463 12.8132 7.66523 13.0324C8.22583 13.2516 8.82667 13.3643 9.43341 13.3641C10.0402 13.3643 10.641 13.2516 11.2016 13.0324C11.7622 12.8132 12.2716 12.4919 12.7006 12.0867C13.1296 11.6815 13.4699 11.2004 13.702 10.6709C13.9341 10.1415 14.0534 9.57401 14.0532 9.00098C14.0534 8.42794 13.9341 7.86048 13.702 7.33102C13.4699 6.80156 13.1296 6.32049 12.7006 5.91529C12.2716 5.51009 11.7622 5.18871 11.2016 4.96952C10.641 4.75032 10.0402 4.63761 9.43341 4.63782ZM9.43341 11.8341C7.77517 11.8341 6.4336 10.5671 6.4336 9.00098C6.4336 7.43485 7.77517 6.16782 9.43341 6.16782C11.0917 6.16782 12.4332 7.43485 12.4332 9.00098C12.4332 10.5671 11.0917 11.8341 9.43341 11.8341ZM15.3194 4.46357C15.3191 4.73433 15.205 4.9939 15.0022 5.18526C14.7994 5.37662 14.5244 5.4841 14.2377 5.4841C14.096 5.4841 13.9556 5.45773 13.8246 5.4065C13.6937 5.35527 13.5747 5.28017 13.4745 5.18551C13.3742 5.09084 13.2947 4.97845 13.2405 4.85477C13.1862 4.73108 13.1583 4.59851 13.1583 4.46463C13.1583 4.33075 13.1862 4.19819 13.2405 4.0745C13.2947 3.95081 13.3742 3.83843 13.4745 3.74376C13.5747 3.64909 13.6937 3.574 13.8246 3.52277C13.9556 3.47153 14.096 3.44516 14.2377 3.44516C14.8323 3.44516 15.3194 3.90204 15.3194 4.46357Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </span>

                {/* Twitter Link  */}
                <span className="flex justify-center w-[40px] h-[40px] p-3 border border-transparent hover:border-white rounded-lg transition-all duration-400 ease-linear">
                  <a
                    href="https://twitter.com/manjuruldesign"
                    target="_blank"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                    >
                      <path
                        id="Vector"
                        d="M20.4068 1.89789C19.6713 2.21861 18.8812 2.43531 18.0506 2.53326C18.9076 2.0286 19.5488 1.23432 19.8545 0.298631C19.0493 0.769299 18.168 1.1006 17.249 1.27812C16.631 0.628768 15.8125 0.198364 14.9204 0.0537355C14.0284 -0.0908933 13.1128 0.0583448 12.3157 0.47828C11.5187 0.898215 10.8849 1.56535 10.5126 2.37611C10.1404 3.18688 10.0505 4.0959 10.257 4.96206C8.62548 4.88144 7.02938 4.46412 5.57231 3.73718C4.11525 3.01023 2.82979 1.98991 1.79937 0.742437C1.44704 1.34053 1.24445 2.03398 1.24445 2.7725C1.24406 3.43734 1.41042 4.09199 1.72879 4.67838C2.04717 5.26477 2.50769 5.76476 3.06952 6.13398C2.41795 6.11358 1.78076 5.94032 1.21098 5.62863V5.68064C1.21091 6.6131 1.53867 7.51687 2.13865 8.23859C2.73862 8.96031 3.57385 9.45553 4.50262 9.64022C3.89818 9.8012 3.26448 9.82491 2.64936 9.70957C2.91141 10.5119 3.42184 11.2135 4.10921 11.7162C4.79658 12.2188 5.62648 12.4974 6.48271 12.5128C5.0292 13.6357 3.23413 14.2448 1.38626 14.2421C1.05893 14.2422 0.731875 14.2234 0.406784 14.1858C2.28248 15.3726 4.46592 16.0024 6.69587 16C14.2445 16 18.3712 9.84739 18.3712 4.51132C18.3712 4.33796 18.3668 4.16286 18.3589 3.9895C19.1616 3.41825 19.8544 2.71087 20.405 1.90049L20.4068 1.89789Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-6 border-t-[2px] border-[#262627]">
          <span className="text-center font-rocGroteskReg tracking-[-0.48px] text-[#949493]">
            ©2025 Md Manjurul Islam all right reserved
          </span>
        </div>
      </div>
    </section>
  );
}
