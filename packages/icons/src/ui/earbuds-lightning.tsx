import type { Icon } from './types'

export const IconEarbudsLightning: Icon = ({
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
      data-slot='icon-ui-earbuds-lightning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m18.85 15.62-1.45 1.73c-.47.56-.7.84-.63 1.1l.04.1c.13.23.49.27 1.21.35h.06c.41.05.62.07.74.2l.1.13c.08.16.03.36-.06.77-.3 1.26-.44 1.89-.23 2.09q.11.09.25.12c.28.05.7-.44 1.54-1.43h0l1.45-1.71c.5-.61.76-.91.67-1.18l-.01-.03c-.11-.26-.5-.31-1.3-.41h0l-.12-.02c-.38-.05-.57-.07-.69-.18l-.12-.17c-.06-.15-.02-.34.07-.71h0c.27-1.19.4-1.78.22-1.98a.5.5 0 0 0-.3-.15c-.27-.03-.66.44-1.44 1.38'
        stroke='currentColor'
      />
      <path opacity='.2' d='M5.96 12.03a4.25 4.25 0 1 1 4.26-4.25v9.57H5.96z' fill='currentColor' />
      <path
        opacity='.2'
        d='M18.04 12.38a4.33 4.33 0 0 0 4.25-4.4c0-2.42-1.9-4.4-4.25-4.4a4.33 4.33 0 0 0-4.26 4.4v9.37h3.26a1 1 0 0 0 1-1z'
        fill='currentColor'
      />
      <path d='M10.22 7.78a4.25 4.25 0 1 0-4.25 4.25' stroke='currentColor' />
      <path d='M13.78 7.84a4.25 4.25 0 1 1 4.25 4.25' stroke='currentColor' />
      <path
        d='M10.22 7.6v10.69c0 .58 0 .87-.08 1.1-.15.45-.5.8-.94.94-.23.08-.52.08-1.1.08s-.88 0-1.12-.08a1.5 1.5 0 0 1-.93-.93c-.08-.24-.08-.53-.08-1.11v-6.26'
        stroke='currentColor'
      />
      <path d='M13.78 7.66v11.89c0 .51.42.92.93.92' stroke='currentColor' />
      <path d='M5.13 8.98V6.7' stroke='currentColor' />
      <path d='M18.87 8.98V6.7' stroke='currentColor' />
      <path d='M10.22 17.34H5.97' stroke='currentColor' />
      <path d='M14.46 17.34h-.68' stroke='currentColor' />
    </svg>
  )
}
