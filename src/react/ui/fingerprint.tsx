import type { Icon } from './types'

export const IconFingerprint: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='fingerprint'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4.42 7.158c.613-.703 2.039-2.29 4.677-2.996 2.247-.602 4.167-.385 4.846-.134m2.711.915c.454.21 1.583.945 2.46 2.215M5.22 19.215C4.632 16.9 4.087 11.62 6.386 8.968c2.593-2.989 6.675-3.69 10.017-1.113 4.125 3.18 3.749 8.532 2.914 9.964-1.146 1.964-4.742 1.16-4.878-1.682-.216-4.535-1.87-5.016-3.404-4.452-1.888.695-2.324 4.681-.426 8.446m1.22-5.363c.036.827.176 2.314.56 3.358.384 1.045 1.064 2.083 1.413 2.372m-6.876-5.89c.016.743.078 2.08.25 3.018.17.94.474 1.872.63 2.132m-.294-7.754c.427-1.397 2.212-3.339 4.744-3.125 3.556.3 4.285 3.464 4.594 4.29.248.661.363 2.39.39 3.172'
      />
    </svg>
  )
}
