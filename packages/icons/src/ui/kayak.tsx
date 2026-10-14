import type { Icon } from './types'

export const IconKayak: Icon = ({
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
      data-slot='icon-ui-kayak'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.7 7.7C2.62 12.78.42 18.83 2.8 21.2c2.37 2.38 8.42.18 13.5-4.9s7.28-11.13 4.9-13.5C18.83.42 12.78 2.62 7.7 7.7m.47 5.31 2.79 2.79 4.9-4.9-2.79-2.79z'
        fill='currentColor'
      />
      <path
        d='M2.7 21.3c-1.55-1.54.24-8.08 5.38-13.22S19.81 1.2 21.31 2.7s-.25 8.09-5.4 13.23C10.79 21.06 4.25 22.85 2.7 21.3'
        stroke='currentColor'
      />
      <path
        d='M17.99 6.73a.51.51 0 1 1-.72-.72.51.51 0 0 1 .72.72'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M6.73 17.99a.51.51 0 1 1-.72-.73.51.51 0 0 1 .72.73'
        fill='currentColor'
        stroke='currentColor'
      />
      <rect
        width='7.29'
        height='4.34'
        rx='1'
        transform='scale(1 -1)rotate(45 24.93 5.17)'
        stroke='currentColor'
      />
      <path
        d='M20.64 20.64c-.58.59-.87.88-1.15.94a1 1 0 0 1-.94-.27c-.2-.2-.29-.6-.47-1.41l-.52-2.34 2.34.52c.8.18 1.2.27 1.4.47a1 1 0 0 1 .28.94c-.06.28-.35.57-.94 1.15'
        stroke='currentColor'
      />
      <path
        d='M3.36 3.36c-.59.58-.88.87-.94 1.15a1 1 0 0 0 .27.94c.2.2.6.29 1.41.47l2.34.52-.52-2.34c-.18-.8-.27-1.2-.47-1.4a1 1 0 0 0-.94-.28c-.28.06-.57.35-1.15.94'
        stroke='currentColor'
      />
      <path d='M17.78 17.78 6.22 6.22' stroke='currentColor' />
    </svg>
  )
}
