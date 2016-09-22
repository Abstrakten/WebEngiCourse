<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/root">
  <html>
  <body>
    <h2>My CD Collection</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>Title</th>
      </tr>
      <xsl:for-each select="/root/course[reg_num&lt;=20573]">
      <xsl:sort select="reg_num"/>
      <tr>
          <td><xsl:value-of select="reg_num"/></td>
      </tr>
     </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>


