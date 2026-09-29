import type { Icon } from './types'

export const IconStrokeAlignInside: Icon = ({
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
      data-slot='icon-ui-stroke-align-inside'
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
        d='M15.4 2.64c2.77 0 4.16 0 5.03.86.88.85.9 2.23.97 5l.31 12.86h-9.96c-.92 0-1.37 0-1.66-.28-.3-.29-.31-.74-.34-1.65l-.08-2.3c-.02-.58-.03-.88.1-1.12.14-.25.4-.4.91-.68l.12-.07c.4-.22.6-.34.73-.52s.17-.4.25-.86l.02-.13c.13-.7.2-1.06.05-1.36s-.47-.46-1.12-.78l-.4-.2c-.6-.3-.92-.46-1.23-.41-.32.05-.56.29-1.05.76l-.4.38a2 2 0 0 1-.6.5c-.18.07-.39.07-.79.07H4.3c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7V4.64c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3z'
        fill='currentColor'
      />
      <path
        d='M11.91 13.39a2.5 2.5 0 0 1-2.48 2.48 2.48 2.48 0 1 1 2.48-2.48'
        stroke='currentColor'
      />
      <path
        d='M21.53 21.36V8.64c0-2.82 0-4.24-.88-5.12-.87-.88-2.29-.88-5.12-.88H2.3'
        stroke='currentColor'
      />
      <path d='M2.29 12.6H7' stroke='currentColor' />
      <path d='M9.89 21.36V15.9' stroke='currentColor' />
      <path
        d='M15.9 21.36V11.29c0-1.89 0-2.83-.6-3.42-.58-.58-1.52-.58-3.4-.58H2.28'
        stroke='currentColor'
      />
    </svg>
  )
}
