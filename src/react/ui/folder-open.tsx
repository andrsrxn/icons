import type { Icon } from '../types'

export const IconFolderOpen: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='folder-open'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.731 7.218v3.535c0 1.39 1.958 1.69 2.374.363a1.215 1.215 0 0 1 1.16-.852h10.202a1.354 1.354 0 0 0 0-2.707h-5c-.443 0-.665 0-.875-.046a2 2 0 0 1-.525-.195c-.19-.103-.358-.247-.694-.536-.335-.29-.503-.434-.693-.536a2 2 0 0 0-.525-.195c-.21-.046-.432-.046-.875-.046H4.947c-.671 0-1.216.544-1.216 1.215Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16.51 18.695H3.73V5.765h5.74l1.805 1.792h7.545v2.707'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M6.11 10.195h15.089l-2.378 8.5H3.73l2.378-8.5Z'
      />
    </svg>
  )
}
