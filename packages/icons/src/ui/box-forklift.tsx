import type { Icon } from './types'

export const IconBoxForklift: Icon = ({
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
      data-slot='icon-ui-box-forklift'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.41 12.43c-1.82.49-2.73.73-3.45.32-.71-.41-.96-1.33-1.45-3.15l-.28-1.05C6.74 6.72 6.5 5.8 6.91 5.1c.42-.72 1.33-.97 3.15-1.45l1.06-.29c1.82-.49 2.73-.73 3.45-.32.71.42.96 1.33 1.45 3.15l.28 1.06c.49 1.82.73 2.73.32 3.45-.42.72-1.33.96-3.15 1.45z'
        fill='currentColor'
      />
      <path
        d='m12.41 12.43 1.06-.28c1.82-.49 2.73-.73 3.15-1.45s.17-1.63-.32-3.45l-.28-1.06c-.5-1.82-.74-2.73-1.45-3.15-.72-.41-1.63-.17-3.45.32l-1.06.29c-1.82.48-2.73.73-3.15 1.45-.41.71-.17 1.62.32 3.44l.28 1.06c.5 1.82.74 2.73 1.45 3.15.72.41 1.63.17 3.45-.32'
        stroke='currentColor'
      />
      <path d='m10.59 3.5 1.06 3.98' stroke='currentColor' />
      <path
        opacity='.2'
        d='m8.77 21.45 11.64-3.11c.9-.25 1.36-.37 1.57-.73s.08-.81-.16-1.72l-.1-.38c-.24-.9-.37-1.36-.72-1.57-.36-.2-.82-.08-1.73.16L7.63 17.22c-.9.24-1.36.36-1.57.72s-.08.82.16 1.73l.1.37c.24.91.37 1.37.73 1.57.35.21.8.09 1.72-.16'
        fill='currentColor'
      />
      <path
        d='m1.66 2.65 4.36 16.27c.28 1.04.42 1.57.73 1.92a2 2 0 0 0 1.12.64c.45.1.97-.05 2.02-.33'
        stroke='currentColor'
      />
      <path
        d='m9.31 21.3 10.85-2.9a4 4 0 0 0 1.26-.45q.48-.39.57-1c.04-.3-.05-.63-.23-1.3-.19-.68-.28-1.02-.46-1.26a1.5 1.5 0 0 0-1-.57c-.29-.04-.63.05-1.3.23L5.67 17.62'
        stroke='currentColor'
      />
    </svg>
  )
}
