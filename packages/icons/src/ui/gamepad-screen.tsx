import type { Icon } from './types'

export const IconGamepadScreen: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-gamepad-screen'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M6.73 16.51h3.94' stroke='currentColor' />
      <path d='M8.7 18.49v-3.94' stroke='currentColor' />
      <path
        d='M14.93 18.07a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.21 15.16a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <rect
        width='9.55'
        height='17.49'
        rx='4.78'
        transform='matrix(0 -1 -1 0 20.79 21.3)'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.87 6.7c0-1.88 0-2.82.6-3.4.58-.6 1.52-.6 3.4-.6h12.24c1.89 0 2.83 0 3.42.6.58.58.58 1.52.58 3.4v4.76a1.84 1.84 0 0 1-2.94 1.47l-.71-.53-.42-.3a2 2 0 0 0-.74-.24c-.12-.02-.25-.02-.5-.02H7.87c-.6 0-.89 0-1.16.08-.28.09-.53.25-1.02.57l-1.64 1.06q-.27.17-.58.17a1.6 1.6 0 0 1-1.6-1.6z'
        fill='currentColor'
      />
      <path
        d='M19.94 13.72a2.33 2.33 0 0 0 2.33-2.33V8.22c0-2.36 0-3.53-.62-4.34a3 3 0 0 0-.55-.55c-.8-.62-1.98-.62-4.34-.62H7.24c-2.36 0-3.53 0-4.34.62a3 3 0 0 0-.55.55c-.62.8-.62 1.98-.62 4.34v3.05c0 1.35 1.1 2.45 2.46 2.45'
        stroke='currentColor'
      />
    </svg>
  )
}
