import { database_users } from "../Firebase";
export const FETCH_USER_PROFILE = "fetch_userprofile";
export const PROFILE_STATUS = " profile_status";

export function getProfile() {
  return dispatch => {
    dispatch({
      type: PROFILE_STATUS,
      payload: true
    });
    database_users.on(
      "value",
      snapshot => {
        dispatch({
          type: FETCH_USER_PROFILE,
          payload: snapshot.val()
        });
        dispatch({
          type: PROFILE_STATUS,
          payload: false
        });
      },
      () => {
        dispatch({
          type: PROFILE_STATUS,
          payload: -1
        });
      }
    );
  };
}

export function saveUser(profile, uid) {
  return dispatch => database_users.push({ ...profile, uid });
}

/*export function deletePost(id) {
  return dispatch => database.child(id).remove();
}

export function saveComment(comment, id, uid) {
  return dispatch =>
    database
      .child(id)
      .child("comments")
      .push({
        username: comment.username,

        content: comment.content,
        uid
      });
}
export function deleteComment(postId, commentId) {
  return dispatch =>
    database
      .child(postId)
      .child("comments")
      .child(commentId)
      .remove();
}
*/
