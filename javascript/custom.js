/**
 * Created by peter joseph on 7/11/2017.
 */

/**function to calculate student mark***/


function cal(){

    /****assigning variables**/

    var m1, m2, m3, total= 0, avg = 0, result="", grade="";

    /**retrieving input value***/

    m1=parseInt(document.form.wp.value);
    m2=parseInt(document.form.java.value);
    m3=parseInt(document.form.cg.value);

    /**total value***/

    total=m1+m2+m3;

    /**average value***/

    avg=total/3;

    /**condition***/

    if(m1<35 || m2<35 || m3<35){
        result="fail";
        grade="D"
    }

    else if(avg>=75){
        result="Distinction";
        grade="A+"
    }

    else if(avg>=60 && avg<75){
        result="First Class";
        grade="A"
    }

    else if(avg>=50 && avg< 60){
        result="Second Class";
        grade="B"
    }

    else if(avg>=35 && avg <50){
        result="Pass";
        grade="C"
    }

    else if(avg<35){
        result="Fail";
        grade="D"
    }

    /****displaying result***/

    document.form.total.value=total;
    document.form.average.value=avg;
    document.form.result.value=result;
    document.form.grade.value=grade;

}
