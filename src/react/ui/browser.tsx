import type { Icon } from './types'

export const IconBrowser: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='browser'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.339 8.824H3.66V8.59c0-1.886 0-2.829.586-3.414.586-.586 1.529-.586 3.414-.586h8.678c1.885 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v.234Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M3.661 8.824v6.586c0 1.886 0 2.829.586 3.414.586.586 1.529.586 3.414.586h8.678c1.885 0 2.828 0 3.414-.586.586-.585.586-1.528.586-3.414V8.824m-16.678 0V8.59c0-1.886 0-2.829.586-3.414.586-.586 1.529-.586 3.414-.586h8.678c1.885 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v.234m-16.678 0H20.34'
      />
    </svg>
  )
}
