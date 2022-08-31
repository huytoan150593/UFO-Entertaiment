import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  return (
    <div id="intro-video">
      <video autoPlay muted loop id="myVideo">
        <source
          src="./assets/Amazing Space 8K HDR Ultra HD Video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="content">
        <svg
          id="ufo"
          width="120"
          height="52"
          viewBox="0 0 120 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1_23)">
            <path
              d="M17.04 5.304V25.464C17.04 27.48 17.536 29.032 18.528 30.12C19.52 31.208 20.976 31.752 22.896 31.752C24.816 31.752 26.288 31.208 27.312 30.12C28.336 29.032 28.848 27.48 28.848 25.464V5.304H37.056V25.416C37.056 28.424 36.416 30.968 35.136 33.048C33.856 35.128 32.128 36.696 29.952 37.752C27.808 38.808 25.408 39.336 22.752 39.336C20.096 39.336 17.712 38.824 15.6 37.8C13.52 36.744 11.872 35.176 10.656 33.096C9.43997 30.984 8.83197 28.424 8.83197 25.416V5.304H17.04Z"
              fill="#2F2E2C"
            />
            <path
              d="M69.5557 5.304V11.88H55.8277V18.984H66.0997V25.368H55.8277V39H47.6197V5.304H69.5557Z"
              fill="#2F2E2C"
            />
            <path
              d="M94.6057 39.336C91.4377 39.336 88.5257 38.6 85.8697 37.128C83.2457 35.656 81.1497 33.608 79.5817 30.984C78.0457 28.328 77.2777 25.352 77.2777 22.056C77.2777 18.76 78.0457 15.8 79.5817 13.176C81.1497 10.552 83.2457 8.50401 85.8697 7.03201C88.5257 5.56001 91.4377 4.82401 94.6057 4.82401C97.7737 4.82401 100.67 5.56001 103.294 7.03201C105.95 8.50401 108.03 10.552 109.534 13.176C111.07 15.8 111.838 18.76 111.838 22.056C111.838 25.352 111.07 28.328 109.534 30.984C107.998 33.608 105.918 35.656 103.294 37.128C100.67 38.6 97.7737 39.336 94.6057 39.336ZM94.6057 31.848C97.2937 31.848 99.4377 30.952 101.038 29.16C102.67 27.368 103.486 25 103.486 22.056C103.486 19.08 102.67 16.712 101.038 14.952C99.4377 13.16 97.2937 12.264 94.6057 12.264C91.8857 12.264 89.7097 13.144 88.0777 14.904C86.4777 16.664 85.6777 19.048 85.6777 22.056C85.6777 25.032 86.4777 27.416 88.0777 29.208C89.7097 30.968 91.8857 31.848 94.6057 31.848Z"
              fill="#2F2E2C"
            />
            <path
              d="M19.04 5.304V3.304H17.04H8.83197H6.83197V5.304V25.416C6.83197 28.6929 7.49539 31.6149 8.92273 34.0939L8.92269 34.094L8.92938 34.1054C10.3324 36.5054 12.2606 38.3476 14.6946 39.5833L14.7109 39.5916L14.7274 39.5996C17.1452 40.7719 19.8337 41.336 22.752 41.336C25.6779 41.336 28.3836 40.7529 30.8306 39.5487C33.3501 38.3247 35.3628 36.4954 36.8393 34.0962C38.3537 31.6353 39.056 28.7085 39.056 25.416V5.304V3.304H37.056H28.848H26.848V5.304V25.464C26.848 27.1519 26.4233 28.1461 25.8556 28.7493C25.31 29.3289 24.4306 29.752 22.896 29.752C21.3577 29.752 20.5122 29.3278 20.0059 28.7725C19.4569 28.1704 19.04 27.1673 19.04 25.464V5.304ZM71.5557 5.304V3.304H69.5557H47.6197H45.6197V5.304V39V41H47.6197H55.8277H57.8277V39V27.368H66.0997H68.0997V25.368V18.984V16.984H66.0997H57.8277V13.88H69.5557H71.5557V11.88V5.304ZM84.8912 38.8723L84.9002 38.8773C87.866 40.521 91.1138 41.336 94.6057 41.336C98.0976 41.336 101.333 40.5209 104.272 38.8723C107.21 37.2245 109.546 34.9217 111.26 31.9944L111.265 31.9853C112.99 29.0024 113.838 25.6766 113.838 22.056C113.838 18.439 112.992 15.1277 111.264 12.1737C109.579 9.23669 107.237 6.93166 104.267 5.28503C101.33 3.6382 98.0957 2.82401 94.6057 2.82401C91.1138 2.82401 87.866 3.63904 84.9002 5.28267L84.8912 5.28772C81.9575 6.93344 79.609 9.2313 77.8649 12.1501L77.8603 12.1578L77.8557 12.1656C76.1253 15.1217 75.2777 18.4357 75.2777 22.056C75.2777 25.6766 76.1254 29.0024 77.8504 31.9853L77.8576 31.9976L77.8649 32.0099C79.609 34.9287 81.9575 37.2266 84.8912 38.8723ZM99.559 27.8133L99.5524 27.8206L99.5458 27.828C98.3728 29.1418 96.7994 29.848 94.6057 29.848C92.3685 29.848 90.757 29.1486 89.557 27.8619C88.3652 26.5194 87.6777 24.6538 87.6777 22.056C87.6777 19.4139 88.3714 17.5582 89.551 16.2566C90.7516 14.9657 92.3648 14.264 94.6057 14.264C96.7994 14.264 98.3728 14.9702 99.5458 16.284L99.5584 16.2981L99.5712 16.3119C100.783 17.6186 101.486 19.4577 101.486 22.056C101.486 24.6143 100.787 26.4651 99.559 27.8133Z"
              stroke="#ECE4E4"
              strokeWidth="4"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_23"
              x="0.83197"
              y="0.824005"
              width="119.006"
              height="50.512"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_23"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_23"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <Link to="home" style={{ textDecoration: "none" }}>
          <div id="myBtn">Explore</div>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
