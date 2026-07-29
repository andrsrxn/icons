import type { Icon } from './types'

export const IconWarningDiamond: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='warning-diamond'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.57 4.788c.673-.689 1.01-1.033 1.43-1.033.42 0 .757.344 1.43 1.033l5.684 5.814c.645.66.968.99.968 1.398 0 .408-.323.738-.968 1.398l-5.684 5.814c-.673.689-1.01 1.033-1.43 1.033-.42 0-.757-.344-1.43-1.033l-5.684-5.814c-.645-.66-.968-.99-.968-1.398 0-.408.323-.738.968-1.398l5.684-5.814Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.41 15.74a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Z' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.018 12.742V8.284m-7.132 5.114 5.684 5.814c.673.689 1.01 1.033 1.43 1.033.42 0 .757-.344 1.43-1.033l5.684-5.814c.645-.66.968-.99.968-1.398 0-.408-.323-.738-.968-1.398L13.43 4.788c-.673-.689-1.01-1.033-1.43-1.033-.42 0-.757.344-1.43 1.033l-5.684 5.814c-.645.66-.968.99-.968 1.398 0 .408.323.738.968 1.398Zm7.524 2.341a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Z'
      />
    </svg>
  )
}
