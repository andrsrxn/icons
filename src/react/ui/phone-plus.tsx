import type { Icon } from './types'

export const IconPhonePlus: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-phone-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m10.78 14.1-.98-.97c-.61-.62-.92-.93-1.07-1.3a2 2 0 0 1-.14-1.05c.06-.4.28-.77.72-1.52.34-.58.51-.86.58-1.17a2 2 0 0 0 0-.87c-.06-.3-.23-.6-.57-1.17L8.15 4.03c-.47-.8-.7-1.21-1.1-1.32-.4-.1-.8.12-1.61.58l-.8.46c-.46.26-.7.39-.93.69-.25.3-.3.47-.4.82-.56 1.85-1 6.1 4.1 11.22 5.1 5.1 9.37 4.67 11.23 4.12.35-.1.52-.16.82-.4s.44-.48.7-.94l.45-.8c.46-.82.68-1.22.58-1.62s-.51-.63-1.32-1.1l-2.03-1.18c-.58-.33-.86-.5-1.16-.57a2 2 0 0 0-.9.01c-.3.07-.58.24-1.15.58-.74.44-1.1.66-1.49.72a2 2 0 0 1-1.1-.13 5 5 0 0 1-1.26-1.07'
        fill='currentColor'
      />
      <path
        d='m10.78 14.1-.98-.97c-.61-.62-.92-.93-1.07-1.3a2 2 0 0 1-.14-1.05c.06-.4.28-.77.72-1.52.34-.58.51-.86.58-1.17a2 2 0 0 0 0-.87c-.06-.3-.23-.6-.57-1.17L8.15 4.03c-.47-.8-.7-1.21-1.1-1.32-.4-.1-.8.12-1.61.58l-.8.46c-.46.26-.7.39-.93.69-.25.3-.3.47-.4.82-.56 1.85-1 6.1 4.1 11.22 5.1 5.1 9.37 4.67 11.23 4.12.35-.1.52-.16.82-.4s.44-.48.7-.94l.45-.8c.46-.82.68-1.22.58-1.62s-.51-.63-1.32-1.1l-2.03-1.18c-.58-.33-.86-.5-1.16-.57a2 2 0 0 0-.9.01c-.3.07-.58.24-1.15.58h0c-.74.44-1.1.66-1.49.72a2 2 0 0 1-1.1-.13 5 5 0 0 1-1.26-1.07m2.82-7.34h6.47M16.83 10V3.53'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
