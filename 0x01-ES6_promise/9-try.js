//using try with catch and finally

export default function guardrail(mathFunction) {
  const queue = new Array();

  try {
    queue.push(mathFunction());
  } catch (err) { 
    queue.push(err.toString()) 
  }
  finally { 
    queue.push('Guardrail was processed')
  }

  return queue;
}
