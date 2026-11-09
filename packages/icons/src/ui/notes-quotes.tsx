import type { Icon } from './types'

export const IconNotesQuotes: Icon = ({
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
      data-slot='icon-ui-notes-quotes'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.9 21.46c3.78 0 5.66 0 6.83-1.17 1.18-1.18 1.18-3.06 1.18-6.83v-1.81c0-3.77 0-5.66-1.18-6.83-1.17-1.17-3.05-1.17-6.82-1.17h-1.82c-3.77 0-5.65 0-6.82 1.17-1.18 1.17-1.18 3.06-1.18 6.83v1.8c0 3.78 0 5.66 1.18 6.84 1.17 1.17 3.05 1.17 6.82 1.17zm-6.35-9.38c0-.6 0-.9.14-1.14l.05-.07c.17-.23.44-.34 1-.57.7-.3 1.05-.44 1.38-.35l.1.03c.32.13.52.45.9 1.1l.52.87c.25.42.38.63.4.86v.13c-.01.23-.13.44-.36.87-.46.85-.7 1.27-1.07 1.39l-.21.04c-.4.04-.78-.26-1.53-.85l-.56-.44c-.37-.3-.56-.44-.66-.65-.1-.2-.1-.44-.1-.92zm9.98-1.2c-.34-.49-.5-.73-.74-.84a1 1 0 0 0-.38-.1c-.26-.01-.53.12-1.05.38-.4.19-.59.28-.72.44a1 1 0 0 0-.16.26c-.08.19-.08.4-.08.84v.55c0 .46 0 .7.1.9.09.2.27.35.62.64l.51.42c.7.58 1.04.86 1.41.85a1 1 0 0 0 .33-.06c.35-.13.57-.52 1-1.3.24-.43.36-.65.37-.87l-.01-.22c-.04-.22-.18-.42-.46-.82z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M3.1 13.46v-1.81c0-3.77 0-5.66 1.17-6.83s3.05-1.17 6.82-1.17h1.82c3.77 0 5.65 0 6.82 1.17 1.18 1.17 1.18 3.06 1.18 6.83v1.8c0 3.78 0 5.66-1.18 6.84-1.17 1.17-3.05 1.17-6.82 1.17h-1.82c-3.77 0-5.65 0-6.82-1.17-1.18-1.18-1.18-3.06-1.18-6.83'
        stroke='currentColor'
      />
      <path d='M12 5.3V2' stroke='currentColor' />
      <path d='M7.6 5.3V2' stroke='currentColor' />
      <path d='M16.4 5.3V2' stroke='currentColor' />
      <path
        d='M8.6 9.9c-1.23 0-2.22.99-2.22 2.22s.68 1.92 1.85 2.29c.54.17.7.77.73 1.34.02.4.03.59.15.64.12.04.24-.08.5-.32 1.23-1.21 1.25-2.58 1.25-3.57 0-.81-.27-1.54-.66-1.94-.4-.41-.97-.67-1.6-.67'
        stroke='currentColor'
      />
      <path
        d='M15.37 9.9c-1.23 0-2.23.99-2.23 2.22s.76 2 1.96 2.29c.54.13.66.75.65 1.34 0 .38 0 .58.12.63.13.05.25-.07.5-.31 1.23-1.21 1.25-2.58 1.25-3.57 0-.81-.27-1.54-.66-1.94-.4-.41-.97-.67-1.6-.67'
        stroke='currentColor'
      />
    </svg>
  )
}
