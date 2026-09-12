import type { Icon } from './types'

export const IconEthernetPort: Icon = ({
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
      data-slot='icon-ui-ethernet-port'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.63 9c0-1.89 0-2.83.58-3.41C2.8 5 3.74 5 5.63 5h12.74c1.89 0 2.83 0 3.42.59.58.58.58 1.52.58 3.41v4.57c0 .83 0 1.24-.12 1.57a2 2 0 0 1-1.2 1.2c-.32.12-.74.12-1.56.12-.35 0-.53 0-.7.03a2 2 0 0 0-.77.3c-.14.1-.27.22-.52.46l-.68.65c-.58.54-.86.82-1.22.96s-.75.14-1.54.14H9.8c-.7 0-1.05 0-1.38-.11s-.6-.34-1.13-.77l-1.34-1.07-.36-.28a2 2 0 0 0-.85-.3l-.46-.01c-.6 0-.91 0-1.17-.07a2 2 0 0 1-1.42-1.42c-.06-.25-.06-.56-.06-1.17z'
        fill='currentColor'
      />
      <path
        d='M1.63 10.4c0-2.25 0-3.38.57-4.17a3 3 0 0 1 .66-.66C3.65 5 4.78 5 7.03 5h9.94c2.25 0 3.38 0 4.17.57a3 3 0 0 1 .66.66c.57.8.57 1.92.57 4.17v2.78a2.63 2.63 0 0 1-2.62 2.63c-.8 0-1.56.36-2.06.99l-.47.6c-.36.45-.54.67-.75.85a3 3 0 0 1-1.43.7c-.26.04-.55.04-1.12.04h-3.87c-.51 0-.77 0-1-.03a3 3 0 0 1-1.58-.79 5 5 0 0 1-.64-.77l-.42-.55a2.7 2.7 0 0 0-2.12-1.04 2.66 2.66 0 0 1-2.66-2.67z'
        stroke='currentColor'
      />
      <path
        d='M5.95 9.35a.62.62 0 1 1-1.24 0 .62.62 0 0 1 1.24 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.4 9.35a.62.62 0 1 1-1.24 0 .62.62 0 0 1 1.24 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.84 9.35a.62.62 0 1 1-1.24 0 .62.62 0 0 1 1.24 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M19.3 9.35a.64.64 0 1 1-1.27 0 .64.64 0 0 1 1.28 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
