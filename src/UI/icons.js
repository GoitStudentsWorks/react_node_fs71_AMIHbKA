export const ArrowCircleBrokenRightIcon = ({
  size = 32,
  stroke = '#000',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6"
        stroke={stroke}
        d="M4.45 9.334c2.348-4.014 6.638-6.667 11.548-6.667 7.364 0 13.334 5.97 13.334 13.334s-5.97 13.334-13.334 13.334c-4.909 0-9.199-2.653-11.514-6.604l-0.034-0.063"
      ></path>
      <path
        fill="none"
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6"
        stroke={stroke}
        d="M16 21.334l5.334-5.334-5.334-5.334M2.666 16h18.668"
      ></path>
    </svg>
  );
};

export const CalendarCheckIcon = ({
  size = 24,
  stroke = '#84828A',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M21 10H3M21 12.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12M16 2V6M8 2V6M14.5 19L16.5 21L21 16.5"
        stroke={stroke}
        strokeWidth="2"
        sstrokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChartIcon = ({
  size = 32,
  fill = '#000',
  opacity = '0.5',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>chart</title>
      <path
        opacity={opacity}
        fill={fill}
        d="M23.8 9.037c0-0.76 0-1.305 0.037-1.733 0.037-0.435 0.103-0.595 0.133-0.647 0.009-0.013 0.013-0.016 0.016-0.019 0.040-0.026 0.086-0.046 0.135-0.059l0.003-0.001c0.208-0.064 0.569-0.112 1.208-0.112s1 0.048 1.207 0.112c0.053 0.013 0.099 0.033 0.141 0.060l-0.002-0.001c0.005 0.004 0.008 0.007 0.016 0.020 0.031 0.052 0.097 0.212 0.133 0.648 0.037 0.427 0.039 0.973 0.039 1.732v13.925c0 0.896-0.051 1.504-0.135 1.916-0.084 0.413-0.183 0.531-0.2 0.547-0.008 0.009-0.017 0.015-0.027 0.020l-0 0c-0.049 0.021-0.106 0.038-0.166 0.046l-0.004 0c-0.22 0.037-0.509 0.041-1.001 0.041-0.5 0-0.793-0.004-1.015-0.041-0.063-0.009-0.119-0.024-0.172-0.047l0.004 0.002c-0.010-0.004-0.018-0.010-0.025-0.017l-0-0c-0.013-0.015-0.111-0.131-0.193-0.547-0.083-0.413-0.133-1.021-0.133-1.92v-13.925zM25.333 4.2c-1.288 0-2.613 0.136-3.305 1.291-0.303 0.504-0.403 1.085-0.449 1.621-0.045 0.533-0.045 1.177-0.045 1.883v13.968c0 0.955 0.051 1.735 0.175 2.363 0.125 0.627 0.344 1.205 0.761 1.653 0.44 0.468 0.975 0.663 1.467 0.747 0.433 0.075 0.92 0.075 1.344 0.075h0.107c0.417 0 0.9 0 1.333-0.075 0.489-0.084 1.023-0.277 1.463-0.744 0.42-0.445 0.643-1.023 0.771-1.651 0.128-0.631 0.18-1.412 0.18-2.368v-13.968c0-0.707 0-1.348-0.045-1.883-0.047-0.536-0.147-1.117-0.449-1.621-0.693-1.155-2.017-1.291-3.307-1.291zM14.505 12.667c-0.024 0.266-0.037 0.575-0.037 0.887 0 0.079 0.001 0.157 0.003 0.236l-0-0.012v9.811c-0.033 1.147 0.175 1.533 0.299 1.667 0.107 0.115 0.377 0.279 1.231 0.279 0.833 0 1.112-0.163 1.227-0.283 0.125-0.135 0.339-0.523 0.303-1.659v-9.815c0-0.46-0.003-0.811-0.036-1.111-0.032-0.296-0.088-0.448-0.136-0.529l-0.003-0.003c-0.031-0.053-0.197-0.335-1.355-0.335-1.159 0-1.325 0.283-1.356 0.335l-0.001 0.003c-0.049 0.081-0.105 0.233-0.137 0.529zM12.697 10.973c0.64-1.067 1.82-1.44 3.303-1.44 1.481 0 2.663 0.373 3.301 1.44 0.284 0.475 0.395 0.989 0.445 1.444 0.048 0.437 0.048 0.907 0.048 1.328v9.792c0.040 1.301-0.16 2.463-0.92 3.268-0.777 0.824-1.869 0.995-2.875 0.995-1.016 0-2.113-0.169-2.888-1-0.753-0.807-0.944-1.969-0.908-3.26v-9.795c0-0.42 0-0.891 0.048-1.328 0.051-0.453 0.161-0.969 0.445-1.444zM5.169 19.36c-0.035 0.351-0.036 0.776-0.036 1.344v3.688c0 0.64 0.155 0.816 0.229 0.88 0.123 0.104 0.453 0.261 1.304 0.261 0.832 0 1.167-0.156 1.296-0.264 0.080-0.068 0.237-0.248 0.237-0.877v-3.668l-0.009-0.269c-0.015-0.44-0.027-0.783-0.059-1.085-0.040-0.364-0.099-0.533-0.147-0.616v-0.001c-0.013-0.027-0.128-0.285-1.32-0.285-1.195 0-1.333 0.261-1.353 0.297l-0.001 0.003c-0.047 0.079-0.107 0.241-0.141 0.593zM3.356 17.617c0.653-1.111 1.877-1.417 3.311-1.417 1.436 0 2.648 0.307 3.288 1.431 0.276 0.484 0.379 1.020 0.431 1.495 0.043 0.395 0.057 0.841 0.072 1.28l0.008 0.259v3.727c0 0.991-0.253 1.949-1.045 2.613-0.744 0.624-1.743 0.795-2.753 0.795-1.021 0-2.024-0.169-2.768-0.797-0.789-0.669-1.032-1.631-1.032-2.611v-3.724c0-0.521 0-1.056 0.047-1.532 0.049-0.487 0.156-1.027 0.443-1.517z"
      ></path>
    </svg>
  );
};

export const ChevronLeftIcon = ({ size = 24, stroke = '#000', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>chevron-left</title>
      <path
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6667"
        d="M20 24l-8-8 8-8"
      ></path>
    </svg>
  );
};

export const ChevronRightIcon = ({ size = 24, stroke = '#000', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6667"
        stroke={stroke}
        d="M12 24l8-8-8-8"
      ></path>
    </svg>
  );
};

export const CloseIcon = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        // fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.3529"
        // stroke={stroke}
        d="M24 8l-16 16M8 8l16 16"
      ></path>
    </svg>
  );
};

export const DoneIcon = ({ size = 32, fill = '#3cbc81', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={fill}
        d="M14.133 18.4l-2.9-2.9c-0.215-0.217-0.513-0.352-0.843-0.352-0.026 0-0.051 0.001-0.076 0.002l0.003-0c-0.359 0.001-0.683 0.147-0.917 0.383l-0 0c-0.227 0.228-0.367 0.543-0.367 0.891 0 0.015 0 0.030 0.001 0.045l-0-0.002c0 0.377 0.123 0.689 0.367 0.933l3.8 3.8c0.228 0.227 0.543 0.367 0.891 0.367 0.015 0 0.030-0 0.045-0.001l-0.002 0c0.013 0 0.027 0.001 0.042 0.001 0.348 0 0.662-0.14 0.891-0.367l7.567-7.567c0.218-0.216 0.353-0.516 0.353-0.847 0-0.025-0.001-0.050-0.002-0.074l0 0.003c-0.002-0.358-0.149-0.682-0.384-0.916l-0-0c-0.228-0.227-0.543-0.367-0.891-0.367-0.015 0-0.030 0-0.045 0.001l0.002-0c-0.013-0-0.027-0.001-0.042-0.001-0.348 0-0.663 0.14-0.891 0.367l-6.6 6.6zM16 29.333c-0.025 0-0.055 0-0.084 0-1.849 0-3.607-0.387-5.199-1.084l0.083 0.033c-1.644-0.709-3.048-1.669-4.234-2.85l0 0c-1.2-1.2-2.149-2.611-2.849-4.233-0.664-1.508-1.051-3.267-1.051-5.116 0-0.030 0-0.059 0-0.089l-0 0.005c0-1.844 0.351-3.577 1.051-5.2 0.709-1.644 1.669-3.048 2.85-4.234l-0 0c1.2-1.2 2.611-2.151 4.233-2.851 1.508-0.663 3.267-1.050 5.116-1.050 0.030 0 0.059 0 0.089 0l-0.005-0c1.844 0 3.577 0.349 5.2 1.049 1.644 0.709 3.048 1.671 4.234 2.851l-0-0c1.2 1.2 2.149 2.611 2.849 4.233 0.664 1.508 1.051 3.267 1.051 5.116 0 0.030-0 0.059-0 0.089l0-0.005c0 0.025 0 0.055 0 0.084 0 1.849-0.387 3.608-1.084 5.199l0.033-0.083c-0.709 1.644-1.669 3.048-2.85 4.234l0-0c-1.2 1.2-2.611 2.149-4.233 2.849-1.508 0.664-3.267 1.051-5.116 1.051-0.030 0-0.059-0-0.089-0l0.005 0zM16 26.667c2.956 0 5.472-1.039 7.551-3.116 2.077-2.079 3.116-4.595 3.116-7.551s-1.039-5.472-3.116-7.551c-2.079-2.077-4.595-3.116-7.551-3.116s-5.472 1.039-7.549 3.116c-2.079 2.079-3.117 4.595-3.117 7.551s1.040 5.472 3.117 7.551c2.077 2.077 4.593 3.116 7.549 3.116z"
      ></path>
    </svg>
  );
};

export const ErrorIcon = ({ size = 32, fill = '#e74a3b', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={fill}
        d="M14.667 20h2.667v2.667h-2.667v-2.667zM14.667 9.333h2.667v8h-2.667v-8zM15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"
      ></path>
    </svg>
  );
};

export const LogInIcon = ({ size = 32, stroke = '#fff', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="3.2"
        d="M20 4h1.6c2.24 0 3.36 0 4.216 0.435 0.756 0.391 1.357 0.992 1.737 1.726l0.011 0.022c0.437 0.856 0.437 1.976 0.437 4.216v11.2c0 2.24 0 3.36-0.437 4.216-0.391 0.756-0.992 1.356-1.725 1.737l-0.022 0.011c-0.856 0.437-1.976 0.437-4.216 0.437h-1.6M13.333 9.333l6.667 6.667M20 16l-6.667 6.667M20 16h-16"
      ></path>
    </svg>
  );
};

export const LogOutIcon = ({ size = 32, stroke = '#fff', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="3.2"
        d="M21.333 22.667l6.667-6.667M28 16l-6.667-6.667M28 16h-16M12 4h-1.6c-2.24 0-3.36 0-4.216 0.435-0.756 0.391-1.358 0.992-1.738 1.727l-0.011 0.022c-0.435 0.856-0.435 1.976-0.435 4.216v11.2c0 2.24 0 3.36 0.435 4.216 0.391 0.756 0.992 1.357 1.726 1.737l0.022 0.011c0.856 0.437 1.976 0.437 4.216 0.437h1.6"
      ></path>
    </svg>
  );
};

export const MenuIcon = ({ size = 32, stroke = '#000', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.3529"
        stroke={stroke}
        d="M4 16h24M4 8h24M4 24h24"
      ></path>
    </svg>
  );
};

export const MoonIcon = ({ size = 32, fill = '#3e85f3', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={fill}
        d="M27.656 17.393c-0.903 0.24-1.834 0.362-2.77 0.362-2.846 0-5.52-1.107-7.527-3.115-1.923-1.934-3.112-4.6-3.112-7.544 0-0.979 0.131-1.927 0.378-2.828l-0.017 0.075c0.029-0.103 0.045-0.221 0.045-0.344 0-0.736-0.597-1.333-1.333-1.333-0.123 0-0.242 0.017-0.355 0.048l0.009-0.002c-2.353 0.64-4.373 1.837-5.985 3.443l0-0c-5.197 5.197-5.197 13.657 0 18.857 2.4 2.413 5.723 3.907 9.395 3.907 0.012 0 0.024-0 0.037-0h-0.002c0.011 0 0.024 0 0.037 0 3.67 0 6.991-1.493 9.389-3.905l0.001-0.001c1.607-1.612 2.804-3.634 3.422-5.894l0.022-0.094c0.028-0.102 0.044-0.22 0.044-0.341 0-0.737-0.598-1.335-1.335-1.335-0.121 0-0.239 0.016-0.351 0.047l0.009-0.002zM23.96 23.128c-1.92 1.93-4.577 3.124-7.513 3.124-0.010 0-0.019 0-0.029-0h0.002c-0.008 0-0.017 0-0.027 0-2.938 0-5.596-1.195-7.517-3.125l-0-0c-4.158-4.159-4.158-10.927 0-15.086 0.803-0.802 1.73-1.47 2.746-1.977-0.025 0.309-0.040 0.669-0.040 1.033 0 3.681 1.488 7.014 3.894 9.432l-0-0c2.406 2.408 5.731 3.897 9.404 3.897 0.373 0 0.742-0.015 1.108-0.045l-0.048 0.003c-0.538 1.056-1.198 1.961-1.979 2.745l0-0z"
      ></path>
    </svg>
  );
};

export const PencilIcon = ({ size = 32, stroke = '#000', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6"
        stroke={stroke}
        d="M3.334 28.666l7.4-2.846c0.472-0.18 0.708-0.272 0.93-0.392 0.196-0.104 0.384-0.226 0.56-0.364 0.2-0.154 0.378-0.332 0.736-0.69l15.040-15.040c0.703-0.686 1.138-1.642 1.138-2.7 0-2.083-1.689-3.772-3.772-3.772-1.058 0-2.014 0.436-2.699 1.137l-15.041 15.041c-0.243 0.23-0.468 0.47-0.679 0.723l-0.011 0.013c-0.138 0.176-0.26 0.364-0.364 0.56-0.12 0.22-0.21 0.46-0.392 0.932l-2.846 7.4zM3.334 28.666l2.744-7.134c0.196-0.51 0.294-0.766 0.462-0.882 0.106-0.075 0.238-0.12 0.381-0.12 0.044 0 0.087 0.004 0.129 0.012l-0.004-0.001c0.2 0.040 0.394 0.232 0.78 0.62l3.014 3.010c0.386 0.388 0.58 0.58 0.62 0.782 0.008 0.038 0.012 0.081 0.012 0.125 0 0.143-0.045 0.275-0.121 0.383l0.001-0.002c-0.118 0.168-0.374 0.266-0.884 0.462l-7.134 2.744z"
      ></path>
    </svg>
  );
};

export const PlusIcon = ({ size = 32, stroke = '#fff', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="3.5556"
        d="M16 6.667v18.667M6.667 16h18.667"
      ></path>
    </svg>
  );
};

export const PlusCircleIcon = ({ size = 32, stroke = '#000', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6667"
        stroke={stroke}
        d="M16 10.667v10.667M10.667 16h10.667M29.333 16c0 7.364-5.969 13.333-13.333 13.333s-13.333-5.969-13.333-13.333 5.969-13.333 13.333-13.333 13.333 5.969 13.333 13.333z"
      ></path>
    </svg>
  );
};

export const SunIcon = ({ size = 32, fill = '#3e85f3', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={fill}
        d="M9.132 16c0.005 4.212 3.418 7.625 7.629 7.63h0c4.212-0.005 7.625-3.418 7.63-7.629v-0c-0.005-4.212-3.418-7.625-7.629-7.63h-0c-4.212 0.005-7.625 3.418-7.63 7.629v0.001zM16.762 11.418c2.53 0.003 4.579 2.053 4.582 4.582v0c-0.003 2.53-2.053 4.58-4.582 4.582h-0c-2.53-0.003-4.579-2.053-4.582-4.582v-0c0.003-2.53 2.053-4.58 4.582-4.582h0zM15.235 26.667h3.048v4.571h-3.048v-4.571zM15.235 0.762h3.048v4.571h-3.048v-4.571zM1.521 14.476h4.571v3.048h-4.571v-3.048zM27.426 14.476h4.571v3.048h-4.571v-3.048zM4.907 25.696l3.23-3.234 2.156 2.155-3.23 3.234-2.156-2.155zM23.223 7.381l3.234-3.234 2.155 2.155-3.234 3.234-2.155-2.155zM8.14 9.538l-3.234-3.234 2.156-2.155 3.23 3.234-2.153 2.155zM28.611 25.698l-2.155 2.155-3.234-3.234 2.155-2.155 3.234 3.234z"
      ></path>
    </svg>
  );
};

export const TrashIcon = ({ size = 32, stroke = '#000', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6"
        stroke={stroke}
        d="M12 4h8M4 8h24M6.666 8l0.8 12.018c0.15 2.23 0.224 3.346 0.59 4.242 0.673 1.625 1.992 2.868 3.628 3.424l0.042 0.012c0.92 0.304 2.038 0.304 4.274 0.304v0c2.236 0 3.354 0 4.272-0.304 1.679-0.568 2.999-1.81 3.657-3.396l0.015-0.040c0.364-0.896 0.44-2.012 0.588-4.242l0.8-12.018"
      ></path>
    </svg>
  );
};

export const TrashIcon2 = ({ size = 32, stroke = '#ea3d65', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="3"
        d="M4 8h24M25.334 8v18.666c0 1.474-1.195 2.668-2.668 2.668v0h-13.332c-0.001 0-0.001 0-0.002 0-1.472 0-2.666-1.194-2.666-2.666 0-0.001 0-0.001 0-0.002v0-18.666M10.666 8v-2.666c0-0.001 0-0.001 0-0.002 0-1.472 1.194-2.666 2.666-2.666 0.001 0 0.001 0 0.002 0h5.332c1.474 0 2.668 1.195 2.668 2.668v0 2.666M13.334 14.666v8M18.666 14.666v8"
      ></path>
    </svg>
  );
};

export const UserIcon = ({
  size = 32,
  fill = '#fff',
  opacity = '0.18',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={fill}
        opacity={opacity}
        d="M28.865 26.5c-1.903-3.291-4.837-5.651-8.261-6.77 2.651-1.598 4.397-4.462 4.397-7.734 0-4.971-4.029-9-9-9s-9 4.029-9 9c0 3.272 1.746 6.135 4.356 7.711l0.040 0.023c-3.424 1.117-6.358 3.477-8.262 6.77-0.092 0.148-0.147 0.329-0.147 0.522 0 0.552 0.448 1 1 1 0.377 0 0.705-0.209 0.876-0.516l0.003-0.005c2.355-4.070 6.517-6.5 11.133-6.5s8.779 2.43 11.134 6.5c0.173 0.314 0.502 0.522 0.879 0.522 0.324 0 0.613-0.154 0.796-0.393l0.002-0.002c0.126-0.166 0.203-0.376 0.203-0.603 0-0.194-0.055-0.374-0.15-0.528l0.002 0.004zM9 12c0-3.866 3.134-7 7-7s7 3.134 7 7c0 3.866-3.134 7-7 7v0c-3.864-0.004-6.996-3.136-7-7v-0z"
      ></path>
    </svg>
  );
};

export const UserCheckIcon = ({ size = 32, stroke = '#84828a', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        stroke={stroke}
        strokeLinejoin="round"
        sstrokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6667"
        d="M21.333 24l2.667 2.667 5.333-5.333M16 20.667h-6c-1.861 0-2.791 0-3.548 0.229-1.708 0.529-3.026 1.848-3.546 3.518l-0.010 0.038c-0.229 0.757-0.229 1.687-0.229 3.548v0M13.333 16c3.314 0 6-2.686 6-6s-2.686-6-6-6v0c-3.314 0-6 2.686-6 6s2.686 6 6 6v0z"
      ></path>
    </svg>
  );
};

export const StarIcon = ({ ...props }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.8241 14C10.6578 14 10.4922 13.9466 10.3498 13.8403L7.00009 11.3293L3.65039 13.8403C3.51161 13.9447 3.34483 14.0005 3.17386 13.9999C3.00289 13.9993 2.83648 13.9422 2.69839 13.8369C2.56018 13.7321 2.45708 13.5845 2.40378 13.4149C2.35048 13.2454 2.34969 13.0626 2.40151 12.8925L3.6508 8.67793L0.331167 6.23275C0.193589 6.12662 0.0914162 5.97796 0.0390997 5.8078C-0.0132167 5.63764 -0.0130282 5.45459 0.0396388 5.28455C0.0927213 5.11492 0.195461 4.96702 0.333337 4.86175C0.471213 4.75648 0.637253 4.69916 0.807989 4.6979L4.91945 4.69144L6.22844 0.58142C6.28246 0.412106 6.38607 0.264848 6.5246 0.160499C6.66312 0.0561503 6.82954 0 7.00029 0C7.17104 0 7.33746 0.0561503 7.47599 0.160499C7.61451 0.264848 7.71812 0.412106 7.77214 0.58142L9.0589 4.69144L13.1914 4.6979C13.3623 4.69891 13.5286 4.75619 13.6666 4.86162C13.8046 4.96705 13.9073 5.11526 13.9602 5.2852C14.013 5.45513 14.0133 5.63815 13.9609 5.80825C13.9086 5.97835 13.8063 6.12688 13.6686 6.23275L10.349 8.67793L11.5982 12.8925C11.6502 13.0625 11.6495 13.2453 11.5963 13.4149C11.543 13.5844 11.44 13.7321 11.3018 13.8369C11.1633 13.9431 10.9959 14.0002 10.8241 14Z" />
    </svg>
  );
};

export const RightArrow = () => {
  return (
    <svg
      width="39"
      height="6"
      viewBox="0 0 39 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.865 1.10971L35.7445 2.38771L0 2.38871L0 3.38871L35.5205 3.38771L33.75 4.40522L34.248 5.27222L38.3225 2.93122L34.4275 0.282713L33.865 1.10971Z"
        fill="#111111"
      />
    </svg>
  );
};

export const LeftArrow = () => {
  return (
    <svg
      width="39"
      height="6"
      viewBox="0 0 39 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.03685 4.66763L3.15734 3.38963L38.9019 3.38863V2.38863L3.38134 2.38963L5.15184 1.37213L4.65384 0.505127L0.579338 2.84613L4.47435 5.49463L5.03685 4.66763Z"
        fill="#111111"
      />
    </svg>
  );
};
