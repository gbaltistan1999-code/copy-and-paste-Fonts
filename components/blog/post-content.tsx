import type { ComponentType } from "react";
import { InstagramCaptionsClosing, InstagramCaptionsPost } from "./posts/instagram-captions";

/** Maps each blog post slug to its body and (optional) closing section. */
export const postContent: Record<string, { Body: ComponentType; Closing?: ComponentType }> = {
  "instagram-captions": { Body: InstagramCaptionsPost, Closing: InstagramCaptionsClosing },
};
