import type { Icon } from './types'

export const IconSoapDispenser: Icon = ({
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
      data-slot='icon-ui-soap-dispenser'
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
        d='m13.95 13.02-.32.13c-.95.39-1.43.58-1.94.6-.5.03-1-.11-1.98-.4l-1.14-.33a6 6 0 0 0-1.19-.28c-.3-.03-.6.01-1.21.09l-1.6.2-.46 3.3c-.27 1.9-.4 2.86-.1 3.6a3 3 0 0 0 1.3 1.5c.69.38 1.65.38 3.57.38h3.86a2 2 0 0 0 1.9-2.6 2 2 0 0 1-.08-.4z'
        fill='currentColor'
      />
      <path
        d='M14.19 11.68c-.15-1.58-.23-2.37-.6-2.96a3 3 0 0 0-1.23-1.12c-.62-.3-1.42-.3-3-.3-1.6 0-2.4 0-3.03.3A3 3 0 0 0 5.1 8.74c-.36.6-.43 1.4-.57 2.99l-.37 4.38c-.2 2.27-.3 3.4.2 4.24a3 3 0 0 0 .83.9c.78.56 1.92.56 4.2.56 2.3 0 3.45 0 4.24-.56a3 3 0 0 0 .83-.92c.49-.84.38-1.98.16-4.27z'
        stroke='currentColor'
      />
      <path
        d='M6.88 7.3v-.65c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h1.06c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v.64'
        stroke='currentColor'
      />
      <path
        d='M4.45 13.65a4.4 4.4 0 0 1 2.85-.97c1.42 0 3.12 1.25 4.5 1.25 1.39 0 2.03-.68 2.3-1.05'
        stroke='currentColor'
      />
      <path d='M9.41 4.34V1.36' stroke='currentColor' />
      <path
        d='M6.08 1.36h6.93c.84 0 1.26 0 1.64.16.38.17.67.47 1.25 1.08l.24.25'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M19.71 9.78a1.8 1.8 0 0 0 .92-2.4c-.5-1.01-1.61-1.52-2.34-1.75-.28-.1-.43-.14-.6-.05-.19.09-.24.23-.35.5-.27.71-.57 1.9-.07 2.93a1.8 1.8 0 0 0 2.44.77'
        fill='currentColor'
      />
      <path
        d='M19.71 9.78a1.8 1.8 0 0 0 .92-2.4c-.51-1.05-1.64-1.55-2.36-1.76-.27-.09-.41-.13-.59-.05s-.23.22-.34.5c-.27.69-.58 1.88-.07 2.94a1.8 1.8 0 0 0 2.44.77'
        stroke='currentColor'
      />
    </svg>
  )
}
