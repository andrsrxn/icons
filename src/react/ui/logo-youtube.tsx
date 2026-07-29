import type { Icon } from '../types'

export const IconLogoYoutube: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-youtube'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M19.82 7.765a1.18 1.18 0 0 0-.276-.5 1.27 1.27 0 0 0-.487-.325C16.4 5.974 12 6 12 6s-4.4-.026-7.06.944c-.187.07-.354.181-.487.325a1.18 1.18 0 0 0-.276.5c-.182.672-.426 1.988-.426 4.231s.244 3.56.43 4.235c.048.184.143.355.275.497.132.143.298.254.485.324C7.6 18.026 12 18 12 18s4.4.026 7.059-.944c.187-.07.354-.18.486-.323a1.18 1.18 0 0 0 .278-.498c.185-.675.429-1.992.429-4.235 0-2.243-.247-3.56-.433-4.235ZM10.731 14.4V9.6L14.54 12l-3.808 2.4Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14.539 12 10.73 9.6v4.8l3.81-2.4Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.751 12c0 2.243.244 3.559.43 4.235.048.184.143.355.275.497.132.143.298.254.485.324C7.6 18.026 12 18 12 18s4.4.026 7.059-.944c.187-.07.354-.18.486-.323a1.18 1.18 0 0 0 .278-.498c.185-.675.429-1.992.429-4.235 0-2.243-.244-3.559-.43-4.235a1.18 1.18 0 0 0-.276-.5 1.272 1.272 0 0 0-.487-.325C16.4 5.974 12 6 12 6s-4.4-.026-7.06.944c-.187.07-.354.181-.487.325a1.18 1.18 0 0 0-.276.5c-.182.672-.426 1.988-.426 4.231Z'
      />
    </svg>
  )
}
