import type { Icon } from './types'

export const IconExclude: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='exclude'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M15.157 8.694H12.81c-1.87 0-2.806 0-3.387.58-.58.582-.58 1.517-.58 3.387v2.5h2.345c1.87 0 2.806 0 3.387-.581.58-.581.58-1.517.58-3.387v-2.5Z'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M8.843 15.16h2.346c1.87 0 2.806 0 3.387-.58.58-.581.58-1.517.58-3.387v-2.5h-2.345c-1.87 0-2.806 0-3.387.582-.58.58-.58 1.516-.58 3.386v2.5Z'
          clipRule='evenodd'
        />
      </g>
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M3.582 11.193c0 1.87 0 2.806.58 3.387.582.58 1.517.58 3.387.58h3.64c1.87 0 2.806 0 3.387-.58.58-.582.58-1.517.58-3.387v-3.64c0-1.87 0-2.805-.58-3.386-.581-.581-1.517-.581-3.387-.581H7.55c-1.87 0-2.805 0-3.386.58-.581.582-.581 1.517-.581 3.387v3.64Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M8.843 16.301c0 1.87 0 2.806.581 3.387.581.58 1.516.58 3.387.58h3.64c1.87 0 2.805 0 3.386-.58.581-.581.581-1.516.581-3.387v-3.64c0-1.87 0-2.805-.58-3.386-.582-.581-1.517-.581-3.387-.581h-3.64c-1.87 0-2.806 0-3.387.58-.58.582-.58 1.517-.58 3.387v3.64Z'
      />
    </svg>
  )
}
