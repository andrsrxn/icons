import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNTkgOS43MDljMC0xLjAxOCAwLTEuNTI3LjU5OC0xLjg0NC41OTctLjMxNiAxLjU2LS4zMTYgMy40ODQtLjMxNmg4LjY1NmMxLjkyNSAwIDIuODg3IDAgMy40ODQuMzE2LjU5OC4zMTcuNTk4LjgyNi41OTggMS44NDR2NC41ODJjMCAxLjAxOCAwIDEuNTI3LS41OTggMS44NDQtLjU5Ny4zMTYtMS41Ni4zMTYtMy40ODQuMzE2SDcuNjcyYy0xLjkyNSAwLTIuODg3IDAtMy40ODQtLjMxNi0uNTk4LS4zMTctLjU5OC0uODI2LS41OTgtMS44NDRWOS43MDlaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTguMTU4IDEyLjA4YS40OTEuNDkxIDAgMSAxLS45ODIgMCAuNDkxLjQ5MSAwIDAgMSAuOTgyIDBabTQuNDIyLjAwOGEuNDkxLjQ5MSAwIDEgMS0uOTgzIDAgLjQ5MS40OTEgMCAwIDEgLjk4MiAwWm00LjQyLjAwOWEuNDkxLjQ5MSAwIDEgMS0uOTgzIDAgLjQ5MS40OTEgMCAwIDEgLjk4MyAwWiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy41OSAxMS41NDljMC0xLjg4NiAwLTIuODI5LjU4Ni0zLjQxNC41ODYtLjU4NiAxLjUyOC0uNTg2IDMuNDE0LS41ODZoOC44MmMxLjg4NiAwIDIuODI4IDAgMy40MTQuNTg2LjU4Ni41ODUuNTg2IDEuNTI4LjU4NiAzLjQxNHYuOTAyYzAgMS44ODYgMCAyLjgyOS0uNTg2IDMuNDE0LS41ODYuNTg2LTEuNTI4LjU4Ni0zLjQxNC41ODZINy41OWMtMS44ODYgMC0yLjgyOCAwLTMuNDE0LS41ODYtLjU4Ni0uNTg1LS41ODYtMS41MjgtLjU4Ni0zLjQxNHYtLjkwMloiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTguMTU4IDEyLjA4YS40OTEuNDkxIDAgMSAxLS45ODIgMCAuNDkxLjQ5MSAwIDAgMSAuOTgyIDBabTQuNDIyLjAwOGEuNDkxLjQ5MSAwIDEgMS0uOTgzIDAgLjQ5MS40OTEgMCAwIDEgLjk4MiAwWm00LjQyLjAwOWEuNDkxLjQ5MSAwIDEgMS0uOTgzIDAgLjQ5MS40OTEgMCAwIDEgLjk4MyAwWiIvPjwvc3ZnPg==)
 */
export const IconPasscode: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-passcode'
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
