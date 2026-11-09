import type { Icon } from './types'

export const IconFolderPlus: Icon = ({
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
      data-slot='icon-ui-folder-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.24 14.2c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.76c-2.83 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12V7.5c0-.65 0-.98.05-1.25a3 3 0 0 1 2.4-2.4c.27-.05.6-.05 1.25-.05H6.5c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.39.33c.83.71 1.25 1.06 1.75 1.25s1.05.18 2.14.18h1.56c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12z'
        fill='currentColor'
      />
      <path
        d='M4.32 3.93H6.5c.65 0 .97 0 1.28.05a4 4 0 0 1 1.61.63c.26.17.5.4.97.83.47.44.7.66.97.84a4 4 0 0 0 1.61.63c.3.05.63.05 1.28.05h1.39c2.45 0 3.67 0 4.59.52a4 4 0 0 1 1.51 1.51c.52.92.52 2.14.52 4.6 0 2.44 0 3.66-.52 4.58a4 4 0 0 1-1.51 1.51c-.92.52-2.14.52-4.59.52H9.76c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V6.5a2.56 2.56 0 0 1 2.56-2.56'
        stroke='currentColor'
      />
      <path d='M8.7 13.58h6.6' stroke='currentColor' />
      <path d='M12 16.89v-6.6' stroke='currentColor' />
    </svg>
  )
}
