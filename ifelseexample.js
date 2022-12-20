<!DOCTYPE html>

<HTML>
    <HEAD>
        <SCRIPT>
            function Find(){
                var a=parseInt(document.getElementById("txta").value);
                var b=parseInt(document.getElementById("txtb").value);
                var g=0;
                if(a>b){
                    g=a;
                }
                else{
                    g=b;
                }
                document.getElementById("txtc").value=""+g;
            }
        </SCRIPT>
    </HEAD>
    <BODY>
        <h2>If with Else</h2>
        <hr />
        <table>
            <tr>
                <td>
                    <label>Enter A:</label>
                </td>
                <td>
                    <input type="text" name="txta" id="txta" />
                </td>
            </tr>
            <tr>
                <td>
                    <label>Enter B:</label>
                </td>
                <td>
                    <input type="text" name="txtb" id="txtb" />
                </td>
            </tr>
            <tr>
                <td>
                    &nbsp;
                </td>
                <td>
                    <input type="button" value="Find" onclick="Find()" />
                </td>
            </tr>
             <tr>
                <td>
                    <label>Greater</label>
                </td>
                <td>
                    <input type="text" name="txtc" id="txtc" readonly />
                </td>
            </tr>
        </table>
    </BODY>
</HTML>