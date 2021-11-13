# Lab 8 - Starter

   1) The answer I chose: 1. Within a Github action that runs whenever code is pushed.
   
      Reason: When we push the code to remote repository, the scripts will run the automatically test. If we manualy run them locally, then it is not really automatic. And if we want to test them locally, we could have other way to test it. And for the run them all after all development is completed option. We shouldn't test the code after all of them are finished. It will be to difficult to debug and may cause the serious error which is hard to fix. So the good time to run automated tests is when we finish one part, we push it to the repository and run the test in Github action.  

   2) No

   3) No. Because it is hard to identify the output of the "message". We don't know what should we compare or expect for the output. "message" feature is a big part, not a single function and unit test is good to be used to test individual component of a feature. Thus it is not good to use unit test here.

   4) Yes. Because "max message length" is an individual component of the "message" feature. We know what we expect to see. We can compare the input message length with 80. Unit test is a good way to test this. 