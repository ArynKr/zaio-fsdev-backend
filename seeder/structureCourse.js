const structureCourse = (course, hours) => {
  const minutes = hours * 60
  const structure = []
  let day = 1
  let noOfLessons = 0
  let totalDuration = 0
  course.forEach(lesson => {
    if (totalDuration + lesson.duration > minutes) {
      structure.push({ day, noOfLessons })
      day++
      noOfLessons = 0
      totalDuration = 0
    }
    noOfLessons++
    totalDuration += lesson.duration
  })
  structure.push({ day, noOfLessons })
  return { hoursPerDay: hours, structure }
}

module.exports = structureCourse
