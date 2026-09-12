import type { Icon } from './types'

export const IconCloudUpload: Icon = ({
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
      data-slot='icon-ui-cloud-upload'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m1.53 12.92 3.8 3.74h13.14l3.26-2.11v-4.23l-3.26-2.33-1.71 1.2-.92-3.46-3.9-2.25-3.27 1.4L7.03 8l-3.8 1.2z'
        fill='currentColor'
      />
      <path d='M6.82 7.58a5.03 5.03 0 0 1 9.23-1.16 5.5 5.5 0 0 1 .6 3.84' stroke='currentColor' />
      <path
        d='M5.03 16.32a3.6 3.6 0 0 1-2.13-1.15 4.22 4.22 0 0 1 3.03-7.19c1.38 0 2.61.66 3.38 1.7'
        stroke='currentColor'
      />
      <path
        d='M16.8 8.44a3.5 3.5 0 0 1 3.33.11 4.23 4.23 0 0 1 1.55 5.78c-.7 1.2-1.63 1.93-2.6 2.05'
        stroke='currentColor'
      />
      <path
        d='m8.95 18.57.23.24c1.34 1.33 2 2 2.83 2s1.5-.67 2.83-2l.24-.24'
        stroke='currentColor'
      />
      <path d='M12.01 20.1v-6.92' stroke='currentColor' />
    </svg>
  )
}
