import type { Icon } from './types'

export const IconFolderScan: Icon = ({
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
      data-slot='icon-ui-folder-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M15.93 21.32c1.79 0 2.68 0 3.38-.31a3.5 3.5 0 0 0 1.72-1.73c.32-.7.32-1.59.32-3.38'
        stroke='currentColor'
      />
      <path
        d='M15.97 2.71c1.75 0 2.63 0 3.31.3a3.5 3.5 0 0 1 1.76 1.77c.31.68.31 1.56.31 3.32'
        stroke='currentColor'
      />
      <path
        d='M8.07 21.32c-1.79 0-2.68 0-3.38-.31a3.5 3.5 0 0 1-1.72-1.73c-.32-.7-.32-1.59-.32-3.38'
        stroke='currentColor'
      />
      <path
        d='M8.07 2.71c-1.79 0-2.68 0-3.38.32a3.5 3.5 0 0 0-1.72 1.72c-.32.7-.32 1.6-.32 3.38'
        stroke='currentColor'
      />
      <path
        d='M7.86 7.65h1.18c.41 0 .61 0 .8.04a2 2 0 0 1 .66.26c.17.1.32.24.62.52s.45.41.62.52a2 2 0 0 0 .65.26c.2.03.4.03.81.03h.75c1.47 0 2.2 0 2.72.37a2 2 0 0 1 .48.48c.37.52.37 1.25.37 2.72s0 2.2-.37 2.72a2 2 0 0 1-.48.48c-.52.37-1.25.37-2.72.37h-3.47c-1.88 0-2.82 0-3.41-.59-.59-.58-.59-1.53-.59-3.41V9.03c0-.76.62-1.38 1.38-1.38'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.26 2.71c3.3 0 4.95 0 5.98 1.03 1.02 1.02 1.02 2.67 1.02 5.97v4.58c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03H9.7c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97V9.7c0-3.3 0-4.95 1.03-5.97C4.74 2.7 6.39 2.7 9.69 2.7zM7.24 15.8c.28.27.43.41.6.48.19.08.38.08.78.08h6.71c.41 0 .62 0 .8-.08s.33-.22.62-.51l.16-.16c.29-.29.43-.43.5-.62.08-.18.08-.38.08-.8v-2.63c0-.4 0-.6-.07-.8a2 2 0 0 0-.51-.61l-.16-.16a2 2 0 0 0-.62-.5c-.18-.08-.39-.08-.8-.08h-2.38c-.4 0-.61 0-.8-.08a2 2 0 0 1-.61-.5l-.47-.48a2 2 0 0 0-.62-.5c-.18-.08-.39-.08-.8-.08H8.33c-.65 0-.98 0-1.23.16l-.11.09c-.23.2-.31.51-.48 1.15q-.05.15-.05.22v.03l-.01.24v4.52c0 .42 0 .62.07.81s.24.34.54.63z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
