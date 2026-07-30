import type { Icon } from './types'

export const IconPanelsTop: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='panels-top'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M8 4c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v4h16V8c0-1.886 0-2.828-.586-3.414C18.828 4 17.886 4 16 4H8Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M4 12v4c0 1.886 0 2.828.586 3.414C5.172 20 6.114 20 8 20h8c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4M4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h8c1.886 0 2.828 0 3.414.586C20 5.172 20 6.114 20 8v4M4 12h16'
      />
    </svg>
  )
}
