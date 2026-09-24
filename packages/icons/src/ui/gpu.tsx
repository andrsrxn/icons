import type { Icon } from './types'

export const IconGpu: Icon = ({
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
      data-slot='icon-ui-gpu'
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
        d='M16.7 5.7c2.54 0 3.8 0 4.65.72l.33.33c.72.84.72 2.11.72 4.65 0 2.53 0 3.8-.72 4.64l-.33.34c-.85.72-2.11.72-4.65.72H3.91V5.7zm2.73 5.7c0 1.59-1.2 2.87-2.69 2.87s-2.7-1.28-2.7-2.87 1.21-2.88 2.7-2.88 2.7 1.29 2.7 2.88'
        fill='currentColor'
      />
      <path
        d='M3.91 5.7h12.8c2.53 0 3.8 0 4.64.72l.33.33c.72.84.72 2.11.72 4.65 0 2.53 0 3.8-.72 4.64l-.33.34c-.85.72-2.11.72-4.65.72H3.91'
        stroke='currentColor'
      />
      <circle cx='16.74' cy='11.4' r='3.04' stroke='currentColor' />
      <path
        d='M3.91 20V5.94l-.01-.56a2 2 0 0 0-1.74-1.74c-.12-.02-.27-.02-.56-.02'
        stroke='currentColor'
      />
      <path
        d='M16.74 10.98a.41.41 0 1 1 0 .83.41.41 0 0 1 0-.83'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M6.91 9.64h3.95' stroke='currentColor' />
      <path d='M6.91 13.22h3.95' stroke='currentColor' />
      <path
        d='M10.86 17.43v.22c0 .95 0 1.42-.29 1.71-.3.3-.76.3-1.7.3h-.15c-.94 0-1.41 0-1.7-.3s-.3-.76-.3-1.7v-.23'
        stroke='currentColor'
      />
      <path
        d='M20.04 17.43v.22c0 .95 0 1.42-.29 1.71-.3.3-.76.3-1.7.3H15.3c-.94 0-1.42 0-1.7-.3-.3-.3-.3-.76-.3-1.7v-.23'
        stroke='currentColor'
      />
    </svg>
  )
}
