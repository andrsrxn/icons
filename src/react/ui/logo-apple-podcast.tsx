import type { Icon } from './types'

export const IconLogoApplePodcast: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-apple-podcast'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M12 13.381a2.072 2.072 0 1 0 0-4.144 2.072 2.072 0 0 0 0 4.144Z'
        />
        <path
          fill='currentColor'
          d='M12.307 20.288h-.614a1.4 1.4 0 0 1-1.36-1.046L9.28 15.098a1.387 1.387 0 0 1 1.36-1.717h2.72a1.387 1.387 0 0 1 1.36 1.717l-1.052 4.144a1.399 1.399 0 0 1-1.36 1.046Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.676 13.483a5.526 5.526 0 1 1 10.648 0m-9.932 5.408a8.288 8.288 0 1 1 9.216 0m-2.536-7.582a2.072 2.072 0 1 1-4.144 0 2.072 2.072 0 0 1 4.144 0Zm-1.765 8.98h-.614a1.4 1.4 0 0 1-1.361-1.047L9.28 15.098a1.387 1.387 0 0 1 1.36-1.717h2.72a1.387 1.387 0 0 1 1.36 1.717l-1.052 4.144a1.399 1.399 0 0 1-1.36 1.046Z'
      />
    </svg>
  )
}
