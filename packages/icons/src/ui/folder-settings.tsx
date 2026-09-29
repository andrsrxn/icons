import type { Icon } from './types'

export const IconFolderSettings: Icon = ({
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
      data-slot='icon-ui-folder-settings'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.67 15.53a2.54 2.54 0 0 0-2.89 3.14l.4 1.6H7.64c-2.82 0-4.24 0-5.12-.89-.88-.88-.88-2.29-.88-5.12V7.44c0-.69 0-1.03.06-1.31a3 3 0 0 1 2.37-2.37c.28-.06.63-.06 1.3-.06h1.1c1.09 0 1.63 0 2.13.19.5.18.92.54 1.75 1.24l.43.37c.83.7 1.24 1.06 1.75 1.24.5.19 1.04.19 2.14.19h1.65c2.83 0 4.25 0 5.12.88.88.87.88 2.29.88 5.12v4.78l-1.17-1.35c-.38-.43-.9-.73-1.47-.83'
        fill='currentColor'
      />
      <path
        d='M22.31 10.5c0-.56 0-.84-.03-1.07a3 3 0 0 0-2.5-2.5c-.23-.04-.51-.04-1.07-.04h-4.49c-1.05 0-1.58 0-2.07-.17l-.2-.07c-.46-.2-.85-.57-1.62-1.29S9.17 4.28 8.69 4.08L8.5 4c-.48-.17-1.01-.17-2.07-.17H4.22a2.6 2.6 0 0 0-2.59 2.59v7.84c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4.84'
        stroke='currentColor'
      />
      <circle
        cx='18.97'
        cy='17.77'
        r='2.44'
        transform='rotate(-90 18.97 17.77)'
        stroke='currentColor'
      />
      <path d='m17.08 21.02.6-.97' stroke='currentColor' />
      <path d='m17.1 14.5.47.83' stroke='currentColor' />
      <path d='m20.82 21.06-.46-.82' stroke='currentColor' />
      <path d='m20.86 14.52-.63 1.04' stroke='currentColor' />
      <path d='m21.43 17.77 1.3-.01' stroke='currentColor' />
      <path d='M15.21 17.78h1.16' stroke='currentColor' />
    </svg>
  )
}
