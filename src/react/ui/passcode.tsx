import type { Icon } from './types'

export const IconPasscode: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='passcode'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.59 9.709c0-1.018 0-1.527.598-1.844.597-.316 1.56-.316 3.484-.316h8.656c1.925 0 2.887 0 3.484.316.598.317.598.826.598 1.844v4.582c0 1.018 0 1.527-.598 1.844-.597.316-1.56.316-3.484.316H7.672c-1.925 0-2.887 0-3.484-.316-.598-.317-.598-.826-.598-1.844V9.709Z'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M8.158 12.08a.491.491 0 1 1-.982 0 .491.491 0 0 1 .982 0Zm4.422.008a.491.491 0 1 1-.983 0 .491.491 0 0 1 .982 0Zm4.42.009a.491.491 0 1 1-.983 0 .491.491 0 0 1 .983 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.59 11.549c0-1.886 0-2.829.586-3.414.586-.586 1.528-.586 3.414-.586h8.82c1.886 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v.902c0 1.886 0 2.829-.586 3.414-.586.586-1.528.586-3.414.586H7.59c-1.886 0-2.828 0-3.414-.586-.586-.585-.586-1.528-.586-3.414v-.902Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.158 12.08a.491.491 0 1 1-.982 0 .491.491 0 0 1 .982 0Zm4.422.008a.491.491 0 1 1-.983 0 .491.491 0 0 1 .982 0Zm4.42.009a.491.491 0 1 1-.983 0 .491.491 0 0 1 .983 0Z'
      />
    </svg>
  )
}
