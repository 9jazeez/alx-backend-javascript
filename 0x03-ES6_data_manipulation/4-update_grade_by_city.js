export default function updateStudentGradeByCity(array, city, arr) {
  return array.filter(word => word.location === city).map((word) => { 
    const [wor] = arr.filter((item) => item.studentId === array.id);
    return { ...word, grade: wor ? wor.grade : 'N/A'};
  });
}
