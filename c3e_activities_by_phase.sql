SELECT CASE
         WHEN NVL(phase, '(no phase)') = 'Qualify' THEN 1
         WHEN NVL(phase, '(no phase)') = 'Discover' THEN 2
         WHEN NVL(phase, '(no phase)') = 'Design' THEN 3
         WHEN NVL(phase, '(no phase)') = 'Develop' THEN 4
         WHEN NVL(phase, '(no phase)') = 'Prove' THEN 5
         WHEN NVL(phase, '(no phase)') = 'Win' THEN 6
         WHEN NVL(phase, '(no phase)') LIKE 'Support%Grow' THEN 7
         WHEN NVL(phase, '(no phase)') = '(no phase)' THEN 98
         ELSE 99
       END AS phase_order,
       CASE
         WHEN phase IS NULL THEN 'No Phase'
         ELSE phase
       END AS phase,
       TRIM(activity_name) AS activity_name
FROM WKSP_DTC_OCI_INNOVATE_TRANSFORM.ALCMY_C3E_ACTIVITIES
WHERE TRIM(activity_name) IS NOT NULL
GROUP BY NVL(phase, '(no phase)'), phase, TRIM(activity_name)
ORDER BY phase_order, activity_name;
