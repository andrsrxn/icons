import type { Icon } from './types'

export const IconWaveSquare: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='wave-square'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.283 15v1c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-.244c-1.886 0-2.829 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V8c0-1.886 0-2.828-.586-3.414C10.867 4 9.924 4 8.04 4h-.304c-1.886 0-2.829 0-3.414.586-.586.586-.586 1.528-.586 3.414'
      />
    </svg>
  )
}
