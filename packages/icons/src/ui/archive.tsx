import type { Icon } from './types'

export const IconArchive: Icon = ({
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
      data-slot='icon-ui-archive'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M4.57 12.28c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h6.86c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v4c0 1.88 0 2.82-.58 3.4-.59.6-1.53.6-3.42.6H8.57c-1.89 0-2.83 0-3.42-.6-.58-.58-.58-1.52-.58-3.4z'
        fill='currentColor'
      />
      <path
        d='M19.43 8.28v4.56c0 3.23 0 4.84-.87 5.93a4 4 0 0 1-.63.63c-1.1.88-2.7.88-5.93.88s-4.84 0-5.93-.88a4 4 0 0 1-.63-.63c-.87-1.1-.87-2.7-.87-5.93V8.28'
        stroke='currentColor'
      />
      <path
        d='M4.65 8.28h14.7c.46 0 .7 0 .89-.06a1.5 1.5 0 0 0 1.06-1.06c.05-.19.05-.42.05-.88v0c0-.47 0-.7-.05-.9a1.5 1.5 0 0 0-1.06-1.05c-.2-.05-.43-.05-.9-.05H4.66c-.46 0-.7 0-.89.05A1.5 1.5 0 0 0 2.7 5.39c-.05.19-.05.42-.05.89v0c0 .46 0 .7.05.88.14.52.55.93 1.06 1.06.2.06.43.06.9.06'
        stroke='currentColor'
      />
      <path d='M16 11.78H8' stroke='currentColor' />
    </svg>
  )
}
