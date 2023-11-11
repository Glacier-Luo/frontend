import request from "@site/src/api/request";
import { TResult } from "@site/src/typings/common";
import { TLesson } from "@site/src/typings/course";

export const getQuizByLessonId = (lessonId: string) => {
  return request
    .get<unknown, TResult<{ list: TLesson[] }>>(
      `/lesson/quiz?lesson_id=${lessonId}`,
    )
    .then(res => res.data);
};
