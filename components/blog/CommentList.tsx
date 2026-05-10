import { CommentItem } from '@/types/blog'

interface CommentListProps {
  comments: CommentItem[]
}

function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <p className="font-inter text-body-md text-[#906f69] italic">
        Soyez le premier à commenter !
      </p>
    )
  }

  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <li key={comment.id} className="bg-white rounded-[28px] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="font-space-grotesk font-semibold text-[#1a1c1c]">
              {comment.author}
            </span>
            <time className="font-inter text-label-caps text-[#906f69] uppercase">
              {formatDate(comment.createdAt)}
            </time>
          </div>
          <p className="font-inter text-body-md text-[#5f5e5e] whitespace-pre-line">
            {comment.content}
          </p>
        </li>
      ))}
    </ul>
  )
}
