import type { Icon } from './types'

export const IconGift: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='gift'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M5.223 11.043h13.554v5.228c0 1.886 0 2.829-.586 3.415-.586.585-1.528.585-3.414.585H9.223c-1.885 0-2.828 0-3.414-.585-.586-.586-.586-1.529-.586-3.415v-5.228Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 11.043H5.223v5.228c0 1.886 0 2.829.586 3.415.586.585 1.529.585 3.414.585H12m0-9.228h6.777v5.228c0 1.886 0 2.829-.586 3.415-.586.585-1.528.585-3.414.585H12m0-9.228v9.228m0-12.818V5.656c0-.993-.867-1.798-1.937-1.798s-1.936.805-1.936 1.798.867 1.797 1.936 1.797H12Zm0-1.797c0-.993.867-1.798 1.937-1.798s1.936.805 1.936 1.798-.867 1.797-1.936 1.797H12m-6.365 3.59h12.73c.593 0 .89 0 1.113-.122a1 1 0 0 0 .4-.4c.122-.224.122-.52.122-1.113 0-.592 0-.889-.122-1.112a1 1 0 0 0-.4-.4c-.224-.122-.52-.122-1.113-.122H5.636c-.593 0-.89 0-1.113.122a1 1 0 0 0-.4.4C4 8.519 4 8.816 4 9.408c0 .593 0 .89.122 1.113a1 1 0 0 0 .4.4c.224.122.52.122 1.113.122Z'
      />
    </svg>
  )
}
