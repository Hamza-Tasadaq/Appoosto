import { Link } from "react-router-dom";

const PhoneFooter = () => {
  return (
    <div
      className="fixed bottom-0 bg-cover sm:h-28 left-0 right-0 z-50 h-20 flex items-center justify-center "
      style={{
        backgroundImage: "url('./assets/rounded-phone-footer-bg.png')",
      }}
    >
      <div className="flex items-center justify-around w-full">
        <div className="flex items-center">
          <Link to={"/category"} className="mx-7">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.04828 11.3125H8.12988C8.70819 11.3124 9.17713 10.8439 9.17773 10.2656V1.04832C9.17722 0.469746 8.70846 0.000775194 8.12988 0H1.04828C0.469593 0.000667349 0.000645786 0.469632 0 1.04832V10.2656C0.000732884 10.844 0.469862 11.3125 1.04828 11.3125Z"
                fill="#B2B2B2"
              />
              <path
                d="M8.33051 12.7969H0.849023C0.379809 12.7985 0.000233793 13.1792 0 13.6484V18.9961C0.000560564 19.4645 0.380574 19.8439 0.849023 19.8438H8.33051C8.79904 19.8441 9.17919 19.4646 9.17969 18.9961V13.6484C9.17952 13.1791 8.79981 12.7984 8.33051 12.7969V12.7969Z"
                fill="#B2B2B2"
              />
              <path
                d="M18.7954 8.53125H11.7141C11.1357 8.53136 10.6666 8.99974 10.6656 9.57812V18.7969C10.6666 19.3753 11.1357 19.8436 11.7141 19.8438H18.7954C19.3738 19.8437 19.8429 19.3753 19.8438 18.7969V9.57812C19.8429 8.99972 19.3738 8.53127 18.7954 8.53125V8.53125Z"
                fill="#B2B2B2"
              />
              <path
                d="M18.9947 0H11.5132C11.0445 0.000753198 10.6649 0.380553 10.6643 0.84918V6.19531C10.6645 6.66448 11.044 7.04518 11.5132 7.04688H18.9947C19.4639 7.04528 19.8436 6.66456 19.8438 6.19531V0.849063C19.8431 0.3804 19.4634 0.000645453 18.9947 0V0Z"
                fill="#B2B2B2"
              />
            </svg>
          </Link>

          <Link to={"/filters"} className="mx-7">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <path
                  d="M13.4896 7.74711C12.6453 7.80047 11.9143 8.30616 11.4032 8.78679C11.8135 8.2174 12.2241 7.42672 12.1707 6.58135C12.067 4.93895 10.2574 3.71937 10.2574 3.71937C10.2574 3.71937 8.61557 5.15693 8.71932 6.79936C8.82216 8.4278 10.6067 9.64368 10.6305 9.65984L10.6296 9.66088C10.6296 9.66088 12.0749 11.3027 13.7115 11.1952C15.3567 11.0954 16.5759 9.28529 16.5759 9.28529C16.5759 9.28529 15.1387 7.64297 13.4896 7.74711Z"
                  fill="black"
                />
                <path
                  d="M16.4137 4.98105C15.5694 5.03438 14.8384 5.54004 14.3273 6.02065C14.7376 5.45128 15.1482 4.66063 15.0948 3.81529C14.9911 2.17286 13.1814 0.953278 13.1814 0.953278C13.1814 0.953278 11.5396 2.39087 11.6434 4.03327C11.7462 5.66174 13.5307 6.87759 13.5546 6.89375L13.5537 6.89478C13.5537 6.89478 14.999 8.53659 16.6356 8.42915C18.2808 8.32932 19.4999 6.5192 19.4999 6.5192C19.4999 6.5192 18.0627 4.87688 16.4137 4.98105Z"
                  fill="black"
                />
                <path
                  d="M18.7679 3.38186C19.8559 2.14716 19.4386 0.00518863 19.4386 0.00518863C19.4386 0.00518863 17.2612 -0.139209 16.1732 1.0955C15.0872 2.32794 15.5024 4.47219 15.5024 4.47219C15.5024 4.47219 17.6819 4.61431 18.7679 3.38186Z"
                  fill="black"
                />
                <path
                  d="M10.8569 10.6975C10.0121 10.7468 9.27741 11.2575 8.76601 11.7403C9.17739 11.1707 9.59022 10.3782 9.53668 9.53061C9.43296 7.88822 7.62334 6.66863 7.62334 6.66863C7.62334 6.66863 5.98153 8.10622 6.08528 9.74862C6.1886 11.3844 7.98989 12.6047 7.99791 12.6101L7.9969 12.6113C7.9969 12.6113 9.43791 14.2492 11.0788 14.1456C12.7197 14.042 13.9388 12.2319 13.9388 12.2319C13.9388 12.2319 12.5017 10.5896 10.8569 10.6975Z"
                  fill="black"
                />
                <path
                  d="M8.18548 13.5899C7.33443 13.6436 6.59784 14.1571 6.08626 14.6411C6.49927 14.0709 6.91563 13.2756 6.86189 12.4246C6.75813 10.7822 4.94851 9.56262 4.94851 9.56262C4.94851 9.56262 3.30674 11.0002 3.41046 12.6426C3.48516 13.8253 4.44547 14.7882 4.97608 15.2345C1.66309 18.4672 0.744571 19.0177 0.520648 19.1098C0.373527 19.076 0.212918 19.1218 0.106054 19.243C-0.0489525 19.4192 -0.0321446 19.6877 0.144027 19.8429C0.233876 19.922 0.322481 20 0.479147 20C0.949767 20 2.03543 19.2951 5.61675 15.7972L5.61712 15.7968C6.11752 16.2637 7.20479 17.118 8.40354 17.0423C10.0445 16.9387 11.2636 15.1285 11.2636 15.1285C11.2636 15.1285 9.8264 13.4862 8.18548 13.5899Z"
                  fill="black"
                />
              </g>
            </svg>
          </Link>
        </div>
        <Link to={"/"} className="bg-Vivid-Red-Tangelo absolute bottom-8 w-12 h-12 left-1/2 -translate-x-1/2	 rounded-full p-3 box-shadow">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6884 8.88562L11.2477 0.283222C10.8333 -0.0944209 10.2084 -0.0943798 9.79418 0.283181L0.353356 8.88566C0.0214135 9.18813 -0.088234 9.65418 0.0739358 10.0729C0.236147 10.4917 0.631091 10.7622 1.08016 10.7622H2.58802V19.3812C2.58802 19.7229 2.8651 20 3.20682 20H8.38154C8.72326 20 9.00034 19.7229 9.00034 19.3812V14.148H12.0416V19.3812C12.0416 19.7229 12.3187 20 12.6604 20H17.8349C18.1766 20 18.4537 19.723 18.4537 19.3812V10.7622H19.9618C20.4109 10.7622 20.8059 10.4916 20.9681 10.0729C21.13 9.65414 21.0204 9.18813 20.6884 8.88562Z"
              fill="white"
            />
            <path
              d="M18.2921 1.23516H14.1364L18.9109 5.57651V1.85392C18.9109 1.5122 18.6338 1.23516 18.2921 1.23516Z"
              fill="white"
            />
          </svg>
        </Link>

        <div className="flex items-center">
          <Link to={"/"} className="mx-7">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <path
                  filRule="evenodd"
                  clipRule="evenodd"
                  d="M0.0256525 5.06024V5.49398C0.0256525 5.65367 0.155112 5.78313 0.314809 5.78313H17.0859C17.2456 5.78313 17.375 5.65367 17.375 5.49398V5.06024C17.4887 4.2639 17.2208 3.46053 16.652 2.89173C16.0832 2.32292 15.2798 2.05505 14.4835 2.16867H13.2787V0.722892C13.2787 0.32365 12.955 0 12.5558 0C12.1565 0 11.8329 0.32365 11.8329 0.722892V2.16867H5.56782V0.722892C5.56782 0.32365 5.24417 0 4.84493 0C4.44569 0 4.12204 0.32365 4.12204 0.722892V2.16867H2.91722C2.12088 2.05505 1.3175 2.32292 0.748703 2.89173C0.179901 3.46053 -0.0879679 4.2639 0.0256525 5.06024ZM10.1558 15.894C10.3213 13.1807 12.4853 11.0175 15.1987 10.853C15.8071 10.8225 16.4163 10.8975 16.9991 11.0747C17.086 11.102 17.1806 11.0869 17.2546 11.0338C17.3286 10.9807 17.3732 10.8958 17.375 10.8048V7.51807C17.375 7.35838 17.2456 7.22892 17.0859 7.22892H0.314809C0.155112 7.22892 0.0256525 7.35838 0.0256525 7.51807V15.1807C-0.0879679 15.9771 0.179901 16.7804 0.748703 17.3492C1.3175 17.918 2.12088 18.1859 2.91722 18.0723H10.1076C10.1986 18.0704 10.2834 18.0258 10.3365 17.9518C10.3896 17.8779 10.4048 17.7832 10.3775 17.6964C10.2003 17.1128 10.1253 16.5031 10.1558 15.894ZM4.86421 15.1807C4.33188 15.1834 3.89819 14.754 3.89553 14.2217C3.89287 13.6894 4.32225 13.2557 4.85457 13.253H4.86421C5.39653 13.253 5.82806 13.6845 5.82806 14.2169C5.82806 14.7492 5.39653 15.1807 4.86421 15.1807ZM3.89553 10.3663C3.89819 10.8986 4.33188 11.328 4.86421 11.3253C5.39653 11.3253 5.82806 10.8938 5.82806 10.3614C5.82806 9.82912 5.39653 9.39759 4.86421 9.39759H4.85457C4.32225 9.40025 3.89287 9.83394 3.89553 10.3663ZM8.71963 11.3253C8.18731 11.328 7.75362 10.8986 7.75095 10.3663C7.74829 9.83394 8.17767 9.40025 8.70999 9.39759H8.71963C9.25195 9.39759 9.68348 9.82912 9.68348 10.3614C9.68348 10.8938 9.25195 11.3253 8.71963 11.3253ZM15.4473 12.2892C13.318 12.2892 11.5919 14.0153 11.5919 16.1446C11.5919 18.2739 13.318 20 15.4473 20C17.5766 20 19.3028 18.2739 19.3028 16.1446C19.3028 14.0153 17.5766 12.2892 15.4473 12.2892ZM16.1394 17.5171C16.3276 17.7052 16.6326 17.7052 16.8208 17.5171C17.009 17.3289 17.009 17.0239 16.8208 16.8357L15.9293 15.9451V14.6988C15.9293 14.4326 15.7135 14.2169 15.4473 14.2169C15.1812 14.2169 14.9654 14.4326 14.9654 14.6988V16.1446C14.9652 16.2725 15.0158 16.3952 15.1061 16.4858L16.1394 17.5171Z"
                  fill="black"
                />
              </g>
            </svg>
          </Link>

          <Link to={"/cart"} className="mx-7">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.4274 5.3125C16.508 5.3125 16.5754 5.37547 16.5814 5.45687L17.6633 19.832C17.6665 19.8753 17.6517 19.9181 17.6225 19.95C17.5932 19.9819 17.5521 20 17.5092 20H0.818222C0.775258 20 0.734149 19.9819 0.704939 19.9498C0.675576 19.918 0.660894 19.8752 0.664139 19.8319L1.74596 5.45687C1.75199 5.37547 1.81937 5.3125 1.90004 5.3125H4.68187V4.53125C4.68187 2.03266 6.69251 0 9.1637 0C11.6349 0 13.6455 2.03266 13.6455 4.53125V5.3125H16.4274ZM9.1637 1.25C7.37406 1.25 5.91823 2.72203 5.91823 4.53125V5.3125H12.4092V4.53125C12.4092 2.72203 10.9533 1.25 9.1637 1.25ZM5.30005 9.6875C4.44773 9.6875 3.75459 8.98656 3.75459 8.125C3.75459 7.50141 4.06368 6.93953 4.68187 6.69297V8.125C4.68187 8.46969 4.95928 8.75 5.30005 8.75C5.64083 8.75 5.91823 8.46969 5.91823 8.125V6.69391C6.53642 6.94047 6.84551 7.50656 6.84551 8.125C6.84551 8.98656 6.15237 9.6875 5.30005 9.6875ZM11.4819 8.125C11.4819 8.98656 12.175 9.6875 13.0273 9.6875C13.8797 9.6875 14.5728 8.98656 14.5728 8.125C14.5728 7.50656 14.2637 6.94047 13.6455 6.69391V8.125C13.6455 8.46969 13.3681 8.75 13.0273 8.75C12.6866 8.75 12.4092 8.46969 12.4092 8.125V6.69297C11.791 6.93953 11.4819 7.50141 11.4819 8.125Z"
                fill="#B2B2B2"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneFooter;
