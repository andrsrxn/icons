import type { Icon } from './types'

export const IconDeviceCpu: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-device-cpu'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.3 8.52c0-2.62 0-3.93-.67-4.85a4 4 0 0 0-.77-.78c-.92-.67-2.23-.67-4.86-.67s-3.94 0-4.86.67q-.45.33-.77.78c-.67.92-.67 2.23-.67 4.85v6.82c0 2.63 0 3.94.67 4.86q.33.45.77.78c.92.66 2.23.66 4.86.66s3.94 0 4.86-.66q.45-.33.77-.78c.67-.92.67-2.23.67-4.86z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M12 22.2c2.63 0 3.94 0 4.86-.68q.45-.32.77-.77c.67-.92.67-2.23.67-4.86V8.11c0-2.63 0-3.94-.67-4.86a4 4 0 0 0-.77-.77c-.92-.67-2.23-.67-4.86-.67v0c-2.63 0-3.94 0-4.86.67q-.45.32-.77.77c-.67.92-.67 2.23-.67 4.86v7.78c0 2.63 0 3.94.67 4.86q.33.45.77.77c.92.67 2.23.67 4.86.67'
        stroke='currentColor'
      />
      <path
        d='M12 16.33a.74.74 0 1 1 0 1.48.74.74 0 0 1 0-1.48'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M9.28 6.33h5.44' stroke='currentColor' />
      <path d='M9.28 10.06h5.44' stroke='currentColor' />
    </svg>
  )
}
