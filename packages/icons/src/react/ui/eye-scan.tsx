import type { Icon } from './types'

export const IconEyeScan: Icon = ({
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
      data-slot='icon-ui-eye-scan'
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
        d='M12 7.87c-3.03 0-4.9 2.12-5.72 3.32-.33.5-.33 1.13 0 1.62.8 1.21 2.67 3.35 5.72 3.35s4.91-2.14 5.72-3.35c.33-.5.33-1.13 0-1.62-.82-1.2-2.7-3.32-5.72-3.32m0 5.87a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48'
        fill='currentColor'
      />
      <path
        d='M12 7.87a6.7 6.7 0 0 0-5.15 2.57c-.47.56-.7.84-.7 1.56s.23 1 .7 1.57a6.7 6.7 0 0 0 5.15 2.6 6.7 6.7 0 0 0 5.16-2.6c.46-.56.7-.84.7-1.57 0-.72-.24-1-.71-1.56A6.7 6.7 0 0 0 12 7.87'
        stroke='currentColor'
      />
      <path
        d='M15.91 21.27c2.24 0 3.36 0 4.14-.56a3 3 0 0 0 .69-.68c.56-.79.56-1.9.56-4.15'
        stroke='currentColor'
      />
      <path
        d='M15.95 2.76c2.2 0 3.3 0 4.08.55a3 3 0 0 1 .72.72c.55.78.55 1.88.55 4.09'
        stroke='currentColor'
      />
      <path
        d='M8.1 21.27c-2.25 0-3.37 0-4.16-.56a3 3 0 0 1-.67-.68c-.57-.78-.57-1.9-.57-4.15'
        stroke='currentColor'
      />
      <path
        d='M8.1 2.76c-2.25 0-3.37 0-4.16.57a3 3 0 0 0-.67.67c-.57.79-.57 1.91-.57 4.15'
        stroke='currentColor'
      />
      <circle cx='12.01' cy='12' r='1.74' stroke='currentColor' />
    </svg>
  )
}
