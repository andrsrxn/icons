import type { Icon } from './types'

export const IconShredder: Icon = ({
  size = 24,
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
      data-slot='shredder'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.56 6.77c0-.6 0-.9-.07-1.14a2 2 0 0 0-1.44-1.43c-.24-.06-.54-.06-1.14-.06H9.38c-1.88 0-2.82 0-3.4.58-.6.6-.6 1.53-.6 3.42v5.11h13.18v-1.33c0-.47 0-.7-.03-.9a2 2 0 0 0-1.57-1.58c-.2-.04-.43-.04-.9-.04s-.7 0-.9-.04A2 2 0 0 1 13.6 7.8c-.04-.2-.04-.42-.04-.9z'
        fill='currentColor'
      />
      <path
        d='M9.42 4.14v.75zm3.04 0v-.75zm3.92 2.12.52-.54h-.01l-.02-.02zm-11.7 6.98a.75.75 0 0 0 1.5 0H4.66m.74-5.1h-.75zm13.12 1.92h.75zm-.75 3.18a.75.75 0 0 0 1.5 0zm.6-4.8-.7.3zm-4.46-4.17-.26.7zm-7.92.45.53.54zm3.41-.58v.75h3.04v-1.5H9.42zm-4 9.1h.75v-5.1h-1.5v5.1zm13.12-3.18h-.75v3.18h1.5v-3.18zm-2.16-3.8-.53.54a51 51 0 0 1 1.67 1.71c.16.19.19.25.18.22l.69-.29.69-.29c-.1-.21-.28-.44-.42-.6q-.25-.3-.57-.64c-.42-.44-.9-.9-1.2-1.19zm2.16 3.8h.75c0-.77.02-1.36-.21-1.9l-.7.28-.68.3c.08.2.1.43.1 1.32zm-6.08-5.92v.75c.81 0 1.02.01 1.2.08l.27-.7.27-.7c-.5-.2-1.04-.18-1.74-.18zm3.92 2.12.5-.56a72 72 0 0 0-2.04-1.73 6 6 0 0 0-.64-.4l-.27.7-.26.7q-.07-.04.03.03l.22.16q.3.22.67.54c.49.41 1 .87 1.29 1.12zM9.42 4.14v-.75c-.92 0-1.69 0-2.3.08a2.7 2.7 0 0 0-1.64.72l.53.53.53.54c.13-.14.33-.24.79-.3.48-.07 1.13-.07 2.1-.07zm-4 4h.75c0-.96 0-1.61.07-2.1.06-.46.17-.65.3-.78L6 4.72l-.53-.53a2.7 2.7 0 0 0-.73 1.65c-.08.61-.08 1.38-.08 2.3zm8.1-3.97h-.74v3.18h1.5V4.17zm2 5.18v.75h3.02V8.6h-3.01zm-2-2h-.74a2.75 2.75 0 0 0 2.75 2.75V8.6c-.7 0-1.25-.56-1.25-1.25z'
        fill='currentColor'
      />
      <path
        d='M3.38 13.24h17.2M5.42 18.65v-3.13m6.44 3.13v-3.13m6.68 3.13v-3.13m-9.9 5.11v-5.11m6.44 5.11v-5.11'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
