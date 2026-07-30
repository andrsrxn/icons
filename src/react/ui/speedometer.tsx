import type { Icon } from './types'

export const IconSpeedometer: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='speedometer'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.644 6.253A5.783 5.783 0 0 0 6.217 12c.077 1.482.524 2.84 2.005 4m8.937-6.615c.399.786.623 1.674.623 2.615m-5.082-.983 2.603-3.712M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-7.293 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0Z'
      />
    </svg>
  )
}
