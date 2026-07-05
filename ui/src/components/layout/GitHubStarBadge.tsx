"use client";

interface GitHubStarBadgeProps {
  className?: string;
  label?: string;
  showCount?: boolean;
  source: string;
}

// Whitelabel: the upstream GitHub star badge is disabled for Tevrix AI.
// Kept as a null component so existing call sites keep compiling.
export function GitHubStarBadge(_props: GitHubStarBadgeProps) {
  return null;
}
